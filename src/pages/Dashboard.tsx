import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Trophy, Flame, BookOpen, Brain, Heart, Star, CheckCircle } from 'lucide-react';
import { getProgress, getStats, updateStreak, Progress, Stats } from '../utils/localStorage';
import { lessonsData } from '../data/lessons';

export default function Dashboard() {
  const [progress, setProgress] = useState<Progress>(getProgress());
  const [stats, setStats] = useState<Stats>(getStats());

  useEffect(() => {
    updateStreak();
    setProgress(getProgress());
    setStats(getStats());
  }, []);

  const totalLessons = lessonsData.length;
  const completedLessonsCount = progress.completedLessons.length;
  const progressPercentage = Math.round((completedLessonsCount / totalLessons) * 100);

  const statCards = [
    { label: 'Current Streak', value: stats.streak, icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50' },
    { label: 'Lessons Done', value: completedLessonsCount, icon: BookOpen, color: 'text-matcha-500', bg: 'bg-matcha-50' },
    { label: 'Best Score', value: Math.max(...(Object.values(progress.bestScores) as number[]), 0), icon: Trophy, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Favorites', value: progress.favorites.length, icon: Heart, color: 'text-sakura-500', bg: 'bg-sakura-50' },
  ];

  return (
    <div className="space-y-12 pb-20">
      <div>
        <h1 className="text-4xl font-serif font-bold text-slate-800 dark:text-white mb-2">Your Progress</h1>
        <p className="text-slate-600 dark:text-slate-300">Keep track of your Japanese learning journey.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm"
            >
              <div className={`w-12 h-12 ${stat.bg} dark:bg-slate-700 rounded-2xl flex items-center justify-center ${stat.color} mb-6`}>
                <Icon size={24} />
              </div>
              <p className="text-3xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Overview */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 bg-indigo-900 text-white rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-sakura-500/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-6">Learning Overview</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-indigo-200 uppercase tracking-widest">Lesson Completion</span>
                    <span>{progressPercentage}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      className="h-full bg-sakura-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">Total Lessons</p>
                    <p className="text-2xl font-bold">{totalLessons}</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">Completed</p>
                    <p className="text-2xl font-bold">{completedLessonsCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-slate-800 dark:text-white mb-6 flex items-center space-x-2">
              <Star size={20} className="text-amber-500" />
              <span>Recent Achievements</span>
            </h3>
            <div className="space-y-4">
              {completedLessonsCount > 0 ? (
                <div className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
                  <div className="w-10 h-10 bg-matcha-100 dark:bg-matcha-500/20 text-matcha-600 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-white">First Lesson Completed!</p>
                    <p className="text-xs text-slate-500 dark:text-slate-300">You've started your journey.</p>
                  </div>
                </div>
              ) : (
                <p className="text-slate-400 dark:text-slate-300 text-center py-4 italic">No achievements yet. Start learning to unlock them!</p>
              )}
            </div>
          </div>
        </div>

        {/* Favorite Characters */}
        <div className="lg:col-span-1">
          <div className="p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm h-full">
            <h3 className="text-xl font-serif font-bold text-slate-800 dark:text-white mb-6 flex items-center space-x-2">
              <Heart size={20} className="text-sakura-500" />
              <span>Favorites</span>
            </h3>
            {progress.favorites.length > 0 ? (
              <div className="grid grid-cols-3 gap-3">
                {progress.favorites.map((char) => (
                  <div
                    key={char}
                    className="aspect-square rounded-2xl bg-sakura-50 dark:bg-slate-900 flex items-center justify-center text-2xl font-serif text-sakura-500 border border-sakura-100 dark:border-slate-800"
                  >
                    {char}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Heart size={40} className="mx-auto text-slate-200 dark:text-slate-800 mb-4" />
                <p className="text-slate-500 dark:text-slate-300 text-sm">No favorite characters yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
