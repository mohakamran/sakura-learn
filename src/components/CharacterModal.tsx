import { motion, AnimatePresence } from 'motion/react';
import { Character } from '../data/hiragana';
import { X, Volume2 } from 'lucide-react';
import { speak } from '../utils/audio';

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

export default function CharacterModal({ character, onClose }: CharacterModalProps) {
  if (!character) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="p-8 text-center">
            <div className="mb-6">
              <span className="text-8xl font-serif text-sakura-500 block mb-2">
                {character.char}
              </span>
              <span className="text-2xl font-mono text-slate-400 dark:text-slate-300 uppercase tracking-widest">
                {character.romaji}
              </span>
            </div>

            <button
              onClick={() => speak(character.char)}
              className="mb-8 flex items-center space-x-2 mx-auto px-6 py-3 bg-sakura-500 text-white rounded-full hover:bg-sakura-600 shadow-lg shadow-sakura-500/30 transition-all active:scale-95"
            >
              <Volume2 size={20} />
              <span className="font-medium">Listen Pronunciation</span>
            </button>

            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">Example Word</h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-serif text-slate-800 dark:text-white mb-1">{character.example}</p>
                  <p className="text-sm font-mono text-slate-500 dark:text-slate-400 italic">{character.exampleRomaji}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-sakura-500">{character.exampleMeaning}</p>
                </div>
              </div>
              <button
                onClick={() => speak(character.example)}
                className="mt-4 text-xs font-medium text-sakura-500 hover:underline flex items-center space-x-1"
              >
                <Volume2 size={12} />
                <span>Hear example</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
