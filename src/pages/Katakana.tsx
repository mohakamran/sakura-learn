import { useState } from 'react';
import { katakanaData } from '../data/katakana';
import { Character } from '../data/hiragana';
import CharacterCard from '../components/CharacterCard';
import CharacterModal from '../components/CharacterModal';
import { Search } from 'lucide-react';

export default function Katakana() {
  const [search, setSearch] = useState('');
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  const filteredData = katakanaData.filter(
    item => 
      item.char.includes(search) || 
      item.romaji.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-serif font-bold text-slate-800 dark:text-white mb-2">Katakana</h1>
          <p className="text-slate-600 dark:text-slate-300">Used for foreign loanwords and emphasis.</p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search character or romaji..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 pr-6 py-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sakura-500/20 focus:border-sakura-500 w-full md:w-80 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {filteredData.map((char) => (
          <CharacterCard 
            key={char.char} 
            character={char} 
            onClick={(c) => setSelectedChar(c)} 
          />
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 dark:text-slate-300 text-lg">No characters found matching "{search}"</p>
        </div>
      )}

      <CharacterModal 
        character={selectedChar} 
        onClose={() => setSelectedChar(null)} 
      />
    </div>
  );
}
