import { useState } from 'react';
import { grammarData, GrammarPoint } from '../data/grammar';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, Volume2, BookOpen, Sparkles } from 'lucide-react';
import { speak } from '../utils/audio';

export default function GrammarPage() {
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<'All' | 'N5' | 'N4'>('All');
  const [selectedPoint, setSelectedPoint] = useState<GrammarPoint | null>(null);

  const filteredData = grammarData.filter(
    item => 
      (levelFilter === 'All' || item.level === levelFilter) &&
      (item.title.includes(search) || 
       item.meaning.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-serif font-bold text-slate-800 dark:text-white mb-2">Grammar</h1>
          <p className="text-slate-600 dark:text-slate-300">Essential N5 and N4 sentence patterns.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-100 dark:border-slate-700">
            {(['All', 'N5', 'N4'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setLevelFilter(level)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  levelFilter === level 
                    ? 'bg-sakura-500 text-white shadow-md' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-sakura-500'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search grammar point..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 pr-6 py-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sakura-500/20 focus:border-sakura-500 w-full md:w-64 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Grammar List */}
        <div className="lg:col-span-1 space-y-4">
          {filteredData.map((point, index) => (
            <motion.button
              key={point.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedPoint(point)}
              className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 group ${
                selectedPoint?.title === point.title
                  ? 'bg-sakura-500 border-sakura-500 text-white shadow-lg shadow-sakura-500/30'
                  : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-800 dark:text-white hover:border-sakura-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest ${
                  selectedPoint?.title === point.title 
                    ? 'bg-white/20 text-white' 
                    : point.level === 'N5' ? 'bg-matcha-50 text-matcha-600' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  {point.level}
                </span>
                <ChevronRight size={16} className={selectedPoint?.title === point.title ? 'text-white' : 'text-slate-300 group-hover:text-sakura-500 transition-colors'} />
              </div>
              <h3 className="text-xl font-bold mb-1">{point.title}</h3>
              <p className={`text-sm ${selectedPoint?.title === point.title ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                {point.meaning}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Grammar Detail */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {selectedPoint ? (
              <motion.div
                key={selectedPoint.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden"
              >
                <div className="p-10 bg-indigo-900 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-sakura-500/20 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sakura-200 text-xs font-bold uppercase tracking-widest">
                        JLPT {selectedPoint.level}
                      </span>
                      <Sparkles size={16} className="text-sakura-400" />
                    </div>
                    <h2 className="text-4xl font-serif font-bold mb-4">{selectedPoint.title}</h2>
                    <p className="text-xl text-indigo-100 opacity-90 mb-8">{selectedPoint.meaning}</p>
                    
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-2">Structure</p>
                      <p className="text-lg font-mono">{selectedPoint.structure}</p>
                    </div>
                  </div>
                </div>

                <div className="p-10 space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6 flex items-center space-x-2">
                      <BookOpen size={14} className="text-sakura-500" />
                      <span>Example Sentences</span>
                    </h4>
                    <div className="space-y-6">
                      {selectedPoint.examples.map((ex, i) => (
                        <div key={i} className="flex items-start space-x-6 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl group hover:bg-sakura-50/50 dark:hover:bg-sakura-500/5 transition-colors">
                          <button 
                            onClick={() => speak(ex.japanese)}
                            className="mt-1 p-3 rounded-2xl bg-white dark:bg-slate-800 text-sakura-500 hover:bg-sakura-500 hover:text-white transition-all shadow-sm"
                          >
                            <Volume2 size={20} />
                          </button>
                          <div>
                            <p className="text-2xl font-serif text-slate-800 dark:text-white mb-2 leading-relaxed">{ex.japanese}</p>
                            <p className="text-sm font-mono text-slate-500 dark:text-slate-400 italic mb-1">{ex.romaji}</p>
                            <p className="text-lg font-medium text-sakura-500">{ex.english}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-12 bg-slate-50/50 dark:bg-slate-900/50 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-[2rem] flex items-center justify-center text-sakura-500 shadow-sm mb-8">
                  <BookOpen size={48} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">Select a Grammar Point</h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed">Choose a pattern from the list to see its structure, meaning, and example sentences.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
