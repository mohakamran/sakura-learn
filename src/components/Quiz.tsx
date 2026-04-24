import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { hiraganaData } from '../data/hiragana';
import { katakanaData } from '../data/katakana';
import { kanjiData } from '../data/kanji';
import { grammarData } from '../data/grammar';
import { CheckCircle2, XCircle, RefreshCcw, Trophy, ArrowRight } from 'lucide-react';
import { getProgress, saveProgress } from '../utils/localStorage';

type QuizType = 'hiragana' | 'katakana' | 'kanji' | 'grammar';

interface Question {
  question: string;
  correctAnswer: string;
  options: string[];
  subtext?: string;
}

export default function Quiz({ type }: { type: QuizType }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateQuiz = () => {
    let data: any[] = [];
    let questionKey = '';
    let answerKey = '';
    let subtextKey = '';

    if (type === 'hiragana') {
      data = hiraganaData;
      questionKey = 'char';
      answerKey = 'romaji';
    } else if (type === 'katakana') {
      data = katakanaData;
      questionKey = 'char';
      answerKey = 'romaji';
    } else if (type === 'kanji') {
      data = kanjiData;
      questionKey = 'character';
      answerKey = 'meaning';
    } else if (type === 'grammar') {
      data = grammarData;
      questionKey = 'title';
      answerKey = 'meaning';
    }

    const shuffled = [...data].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    const newQuestions = shuffled.map(item => {
      const correctAnswer = item[answerKey];
      const options = [correctAnswer];
      while (options.length < 4) {
        const randomItem = data[Math.floor(Math.random() * data.length)];
        const randomAnswer = randomItem[answerKey];
        if (!options.includes(randomAnswer)) {
          options.push(randomAnswer);
        }
      }
      return {
        question: item[questionKey],
        correctAnswer: correctAnswer,
        options: options.sort(() => 0.5 - Math.random()),
        subtext: type === 'kanji' ? `JLPT ${item.level}` : undefined
      };
    });

    setQuestions(newQuestions);
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    generateQuiz();
  }, [type]);

  const handleAnswer = (option: string) => {
    if (selectedOption) return;
    
    setSelectedOption(option);
    const correct = option === questions[currentIndex].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(prev => prev + 1);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
        saveQuizScore();
      }
    }, 1500);
  };

  const saveQuizScore = () => {
    const progress = getProgress();
    const currentBest = progress.bestScores[type] || 0;
    if (score + (isCorrect ? 1 : 0) > currentBest) {
      progress.bestScores[type] = score + (isCorrect ? 1 : 0);
      saveProgress(progress);
    }
  };

  if (questions.length === 0) return null;

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
      >
        <div className="mb-6 inline-flex p-4 bg-sakura-50 dark:bg-slate-700 rounded-full text-sakura-500">
          <Trophy size={48} />
        </div>
        <h2 className="text-3xl font-bold mb-2 text-slate-800 dark:text-white">Quiz Completed!</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">You scored {score} out of {questions.length}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Accuracy</p>
            <p className="text-2xl font-bold text-sakura-500">{(score / questions.length) * 100}%</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Best Score</p>
            <p className="text-2xl font-bold text-matcha-500">{getProgress().bestScores[type] || score}</p>
          </div>
        </div>

        <button
          onClick={generateQuiz}
          className="w-full flex items-center justify-center space-x-2 py-4 bg-sakura-500 text-white rounded-2xl font-bold hover:bg-sakura-600 transition-all shadow-lg shadow-sakura-500/30"
        >
          <RefreshCcw size={20} />
          <span>Try Again</span>
        </button>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex items-center justify-between px-4">
        <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Question {currentIndex + 1} of {questions.length}</span>
        <div className="h-2 w-48 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            className="h-full bg-sakura-500"
          />
        </div>
        <span className="text-sm font-bold text-sakura-500">Score: {score}</span>
      </div>

      <motion.div
        key={currentIndex}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 text-center"
      >
        <div className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Identify this</h3>
          <span className="text-9xl font-serif text-slate-800 dark:text-white block">{currentQuestion.question}</span>
          {currentQuestion.subtext && (
            <span className="mt-4 inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-bold text-slate-500 dark:text-slate-400">
              {currentQuestion.subtext}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOption === option;
            const isCorrectOption = option === currentQuestion.correctAnswer;
            
            let btnClass = "p-6 rounded-2xl text-xl font-mono font-bold border-2 transition-all duration-200 ";
            if (selectedOption) {
              if (isCorrectOption) {
                btnClass += "bg-matcha-50 border-matcha-500 text-matcha-600 dark:bg-matcha-500/10";
              } else if (isSelected) {
                btnClass += "bg-red-50 border-red-500 text-red-600 dark:bg-red-500/10";
              } else {
                btnClass += "bg-slate-50 border-slate-100 text-slate-300 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-700";
              }
            } else {
              btnClass += "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-sakura-500 hover:text-sakura-500";
            }

            return (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedOption}
                className={btnClass}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>{option.toUpperCase()}</span>
                  {selectedOption && isCorrectOption && <CheckCircle2 size={20} />}
                  {selectedOption && isSelected && !isCorrectOption && <XCircle size={20} />}
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
