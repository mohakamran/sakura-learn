import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { motion } from 'motion/react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Outlet />
        </motion.div>
      </main>
      <footer className="py-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 text-sm">
        <p>© 2026 Sakura Learn. Made with ❤️ for Japanese learners.</p>
      </footer>
    </div>
  );
}
