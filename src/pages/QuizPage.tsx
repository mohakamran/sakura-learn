import { useState } from 'react';
import Quiz from '../components/Quiz';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, BookOpen, Sparkles, ArrowLeft } from 'lucide-react';

type QuizType = 'hiragana' | 'katakana' | 'vocabulary' | null;

export default function QuizPage() {
  const [activeQuiz, setActiveQuiz] = useState<QuizType>(null);

  const quizOptions = [
    {
      id: 'hiragana',
      title: 'Hiragana Mastery',
      desc: 'Identify Hiragana characters and their romaji equivalents.',
      icon: 'あ',
      color: 'bg-sakura-50 text-sakura-500',
    },
    {
      id: 'katakana',
      title: 'Katakana Challenge',
      desc: 'Test your knowledge of Katakana characters.',
      icon: 'ア',
      color: 'bg-indigo-50 text-indigo-500',
    },
    {
      id: 'kanji',
      title: 'Kanji Quest',
      desc: 'Identify N5 and N4 level Kanji characters and their meanings.',
      icon: '漢',
      color: 'bg-blue-50 text-blue-500',
    },
    {
      id: 'grammar',
      title: 'Grammar Guru',
      desc: 'Test your knowledge of essential Japanese sentence patterns.',
      icon: '文',
      color: 'bg-matcha-50 text-matcha-500',
    },
  ];

  return (
    <div className="space-y-8">
      <AnimatePresence mode="wait">
        {!activeQuiz ? (
          <motion.div
            key="selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-serif font-bold text-slate-800 dark:text-white mb-2">Quiz Center</h1>
              <p className="text-slate-600 dark:text-slate-300">Challenge yourself and track your learning progress.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quizOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveQuiz(option.id as QuizType)}
                  className="group text-left p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center text-3xl font-serif mb-6 group-hover:scale-110 transition-transform`}>
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{option.title}</h3>
                  <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed mb-6">{option.desc}</p>
                  
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-sakura-50 dark:bg-sakura-500/10 text-sakura-500 text-xs font-bold uppercase tracking-widest group-hover:bg-sakura-500 group-hover:text-white transition-colors">
                    <Sparkles size={12} />
                    <span>Start Quiz</span>
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-8"
          >
            <button
              onClick={() => setActiveQuiz(null)}
              className="flex items-center space-x-2 text-slate-500 dark:text-slate-300 hover:text-sakura-500 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              <span>Back to Quiz Center</span>
            </button>
            <Quiz type={activeQuiz as any} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
