import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, BookOpen, Brain, LayoutDashboard, Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getTheme, saveTheme } from '../utils/localStorage';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(getTheme());
  const location = useLocation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    saveTheme(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Hiragana', path: '/hiragana', icon: BookOpen },
    { name: 'Katakana', path: '/katakana', icon: BookOpen },
    { name: 'Kanji', path: '/kanji', icon: BookOpen },
    { name: 'Grammar', path: '/grammar', icon: Brain },
    { name: 'Lessons', path: '/lessons', icon: BookOpen },
    { name: 'Quiz', path: '/quiz', icon: Brain },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌸</span>
            <span className="font-serif font-bold text-xl tracking-tight text-sakura-500">Sakura Learn</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    isActive 
                      ? "bg-sakura-500 text-white shadow-lg shadow-sakura-500/30" 
                      : "text-slate-600 dark:text-slate-300 hover:bg-sakura-50 dark:hover:bg-slate-800"
                  )}
                >
                  <Icon size={16} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sakura-100 dark:hover:bg-slate-700 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium",
                    isActive 
                      ? "bg-sakura-500 text-white" 
                      : "text-slate-600 dark:text-slate-300 hover:bg-sakura-50 dark:hover:bg-slate-800"
                  )}
                >
                  <Icon size={20} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
