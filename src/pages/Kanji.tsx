import { useState } from 'react';
import { kanjiData, Kanji } from '../data/kanji';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Info, Volume2, X, BookOpen } from 'lucide-react';
import { speak } from '../utils/audio';

export default function KanjiPage() {
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<'All' | 'N5' | 'N4'>('All');
  const [selectedKanji, setSelectedKanji] = useState<Kanji | null>(null);

  const filteredData = kanjiData.filter(
    item => 
      (levelFilter === 'All' || item.level === levelFilter) &&
      (item.character.includes(search) || 
       item.meaning.toLowerCase().includes(search.toLowerCase()) ||
       item.onyomi.toLowerCase().includes(search.toLowerCase()) ||
       item.kunyomi.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-serif font-bold text-slate-800 dark:text-white mb-2">Kanji</h1>
          <p className="text-slate-600 dark:text-slate-300">Master N5 and N4 level Chinese characters.</p>
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
              placeholder="Search meaning or reading..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 pr-6 py-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sakura-500/20 focus:border-sakura-500 w-full md:w-64 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredData.map((kanji, index) => (
          <motion.div
            key={kanji.character}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => setSelectedKanji(kanji)}
            className="group cursor-pointer p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl ${
              kanji.level === 'N5' ? 'bg-matcha-500 text-white' : 'bg-indigo-500 text-white'
            }`}>
              {kanji.level}
            </div>
            <div className="text-center">
              <span className="text-5xl font-serif text-slate-800 dark:text-white block mb-4 group-hover:text-sakura-500 transition-colors">
                {kanji.character}
              </span>
              <p className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-1">{kanji.meaning}</p>
              <div className="flex items-center justify-center space-x-1 text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                <Info size={10} />
                <span>Click for details</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Kanji Detail Modal */}
      <AnimatePresence>
        {selectedKanji && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedKanji(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedKanji(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-10">
                <div className="flex items-start space-x-8 mb-10">
                  <div className="text-center">
                    <span className="text-9xl font-serif text-sakura-500 block leading-none mb-2">
                      {selectedKanji.character}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      selectedKanji.level === 'N5' ? 'bg-matcha-500' : 'bg-indigo-500'
                    }`}>
                      JLPT {selectedKanji.level}
                    </span>
                  </div>
                  <div className="flex-grow pt-4">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">{selectedKanji.meaning}</h2>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Onyomi (Chinese reading)</p>
                        <p className="text-lg font-medium text-slate-700 dark:text-slate-300">{selectedKanji.onyomi}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Kunyomi (Japanese reading)</p>
                        <p className="text-lg font-medium text-slate-700 dark:text-slate-300">{selectedKanji.kunyomi}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6 flex items-center space-x-2">
                    <BookOpen size={14} className="text-sakura-500" />
                    <span>Common Compounds</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selectedKanji.examples.map((ex, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <button 
                          onClick={() => speak(ex.word)}
                          className="mt-1 p-2 rounded-xl bg-white dark:bg-slate-800 text-sakura-500 hover:bg-sakura-500 hover:text-white transition-all shadow-sm"
                        >
                          <Volume2 size={16} />
                        </button>
                        <div>
                          <p className="text-xl font-serif text-slate-800 dark:text-white">{ex.word}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{ex.reading}</p>
                          <p className="text-sm font-medium text-sakura-500">{ex.meaning}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

