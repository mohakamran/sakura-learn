import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Brain, LayoutDashboard, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getProgress, getStats, updateStreak } from '../utils/localStorage';

export default function Home() {
  const [stats, setStats] = useState({ streak: 0, lessons: 0 });

  useEffect(() => {
    updateStreak();
    const progress = getProgress();
    const currentStats = getStats();
    setStats({
      streak: currentStats.streak,
      lessons: progress.completedLessons.length
    });
  }, []);

  const features = [
    {
      title: 'Hiragana',
      desc: 'Master the basic Japanese phonetic script.',
      path: '/hiragana',
      icon: 'あ',
      color: 'bg-sakura-50 text-sakura-500',
    },
    {
      title: 'Katakana',
      desc: 'Learn the script used for foreign words.',
      path: '/katakana',
      icon: 'ア',
      color: 'bg-indigo-50 text-indigo-500',
    },
    {
      title: 'Kanji',
      desc: 'Learn essential N5 and N4 level characters.',
      path: '/kanji',
      icon: '漢',
      color: 'bg-blue-50 text-blue-500',
    },
    {
      title: 'Grammar',
      desc: 'Master N5 and N4 sentence patterns.',
      path: '/grammar',
      icon: '文',
      color: 'bg-matcha-50 text-matcha-500',
    },
    {
      title: 'Lessons',
      desc: 'Essential greetings, numbers, and phrases.',
      path: '/lessons',
      icon: '話',
      color: 'bg-purple-50 text-purple-500',
    },
    {
      title: 'Quiz',
      desc: 'Test your knowledge and track progress.',
      path: '/quiz',
      icon: '?',
      color: 'bg-amber-50 text-amber-500',
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-indigo-900 text-white p-8 md:p-16 lg:p-24">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-sakura-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-matcha-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sakura-200 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} />
            <span>Start your journey today</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Learn Japanese <br />
            <span className="text-sakura-400 italic">Easily.</span> 🇯🇵
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-indigo-100 mb-10 leading-relaxed opacity-80"
          >
            Master Hiragana, Katakana, and essential vocabulary with our interactive lessons and quizzes. Designed for beginners.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/hiragana"
              className="px-8 py-4 bg-sakura-500 text-white rounded-2xl font-bold hover:bg-sakura-600 transition-all shadow-xl shadow-sakura-500/30 flex items-center space-x-2 group"
            >
              <span>Start Learning</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/quiz"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10"
            >
              Take a Quiz
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-800 dark:text-white mb-2">Explore Modules</h2>
            <p className="text-slate-600 dark:text-slate-300">Everything you need to get started with Japanese.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={feature.path}
                className="group block p-8 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-3xl font-serif mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{feature.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Stats / Dashboard Preview */}
      <section className="bg-sakura-50 dark:bg-slate-900/50 rounded-[2.5rem] p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-serif font-bold text-slate-800 dark:text-white mb-4">Track Your Progress</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Keep track of your completed lessons, quiz scores, and daily streaks. Stay motivated on your learning path.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-2 text-sakura-500 font-bold hover:text-sakura-600 transition-colors"
            >
              <span>View Dashboard</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="flex gap-4">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm text-center min-w-[120px]">
              <div className="text-3xl font-bold text-sakura-500 mb-1">{stats.streak}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">Streak</div>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm text-center min-w-[120px]">
              <div className="text-3xl font-bold text-matcha-500 mb-1">{stats.lessons}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">Lessons</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
