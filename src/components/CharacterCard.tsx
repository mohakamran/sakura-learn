import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Character } from '../data/hiragana';
import { Volume2, Heart } from 'lucide-react';
import { speak } from '../utils/audio';
import { getProgress, saveProgress } from '../utils/localStorage';

interface CharacterCardProps {
  character: Character;
  onClick: (char: Character) => void;
  key?: string | number;
}

export default function CharacterCard({ character, onClick }: CharacterCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const progress = getProgress();
    setIsFavorite(progress.favorites.includes(character.char));
  }, [character.char]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const progress = getProgress();
    let newFavorites;
    if (isFavorite) {
      newFavorites = progress.favorites.filter(f => f !== character.char);
    } else {
      newFavorites = [...progress.favorites, character.char];
    }
    saveProgress({ ...progress, favorites: newFavorites });
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(character)}
      className="relative group cursor-pointer p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex flex-col items-center">
        <span className="text-4xl font-serif mb-2 text-slate-800 dark:text-white group-hover:text-sakura-500 transition-colors">
          {character.char}
        </span>
        <span className="text-sm font-mono text-slate-400 dark:text-slate-300 uppercase tracking-widest">
          {character.romaji}
        </span>
      </div>

      <div className="absolute top-2 right-2 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            speak(character.char);
          }}
          className="p-1.5 rounded-full bg-sakura-50 dark:bg-slate-700 text-sakura-500 hover:bg-sakura-100 transition-colors"
        >
          <Volume2 size={14} />
        </button>
        <button
          onClick={toggleFavorite}
          className={`p-1.5 rounded-full transition-colors ${
            isFavorite 
              ? 'bg-sakura-500 text-white' 
              : 'bg-slate-50 dark:bg-slate-700 text-slate-400 hover:text-sakura-500'
          }`}
        >
          <Heart size={14} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
    </motion.div>
  );
}
