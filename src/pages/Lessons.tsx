import { useState, useEffect } from 'react';
import { lessonsData, Lesson } from '../data/lessons';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, CheckCircle, ChevronRight, BookOpen } from 'lucide-react';
import { speak } from '../utils/audio';
import { getProgress, saveProgress } from '../utils/localStorage';

export default function Lessons() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setCompleted(getProgress().completedLessons);
  }, []);

  const toggleComplete = (lessonId: string) => {
    const progress = getProgress();
    let newCompleted;
    if (completed.includes(lessonId)) {
      newCompleted = progress.completedLessons.filter(id => id !== lessonId);
    } else {
      newCompleted = [...progress.completedLessons, lessonId];
    }
    saveProgress({ ...progress, completedLessons: newCompleted });
    setCompleted(newCompleted);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-serif font-bold text-slate-800 dark:text-white mb-2">Lessons</h1>
          <p className="text-slate-600 dark:text-slate-300">Essential Japanese for beginners.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lesson List */}
        <div className="lg:col-span-1 space-y-4">
          {lessonsData.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setSelectedLesson(lesson)}
              className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 ${
                selectedLesson?.id === lesson.id
                  ? 'bg-sakura-500 border-sakura-500 text-white shadow-lg shadow-sakura-500/30'
                  : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-800 dark:text-white hover:border-sakura-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <BookOpen size={18} className={selectedLesson?.id === lesson.id ? 'text-white' : 'text-sakura-500'} />
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70">Module</span>
                </div>
                {completed.includes(lesson.id) && (
                  <CheckCircle size={18} className={selectedLesson?.id === lesson.id ? 'text-white' : 'text-matcha-500'} />
                )}
              </div>
              <h3 className="text-xl font-bold mb-1">{lesson.title}</h3>
              <p className={`text-sm ${selectedLesson?.id === lesson.id ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                {lesson.description}
              </p>
            </button>
          ))}
        </div>

        {/* Lesson Content */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {selectedLesson ? (
              <motion.div
                key={selectedLesson.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden"
              >
                <div className="p-8 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">{selectedLesson.title}</h2>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{selectedLesson.items.length} items to learn</p>
                  </div>
                  <button
                    onClick={() => toggleComplete(selectedLesson.id)}
                    className={`flex items-center space-x-2 px-6 py-2 rounded-full font-bold text-sm transition-all ${
                      completed.includes(selectedLesson.id)
                        ? 'bg-matcha-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-matcha-500 hover:text-white'
                    }`}
                  >
                    <CheckCircle size={16} />
                    <span>{completed.includes(selectedLesson.id) ? 'Completed' : 'Mark as Done'}</span>
                  </button>
                </div>

                <div className="divide-y divide-slate-50 dark:divide-slate-700/50">
                  {selectedLesson.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 flex items-center justify-between group hover:bg-sakura-50/30 dark:hover:bg-sakura-500/5 transition-colors"
                    >
                      <div className="flex items-center space-x-6">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xl font-serif text-slate-800 dark:text-white group-hover:bg-sakura-100 group-hover:text-sakura-600 transition-colors">
                          {item.japanese}
                        </div>
                        <div>
                          <p className="text-lg font-bold text-slate-800 dark:text-white">{item.english}</p>
                          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 italic">{item.romaji}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => speak(item.japanese)}
                        className="p-3 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-sakura-500 hover:text-white transition-all active:scale-95"
                      >
                        <Volume2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-slate-50/50 dark:bg-slate-900/50 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
                <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-3xl flex items-center justify-center text-sakura-500 shadow-sm mb-6">
                  <BookOpen size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Select a Lesson</h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-xs">Choose a module from the list to start learning vocabulary and phrases.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
