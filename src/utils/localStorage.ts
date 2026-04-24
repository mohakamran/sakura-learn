export const STORAGE_KEYS = {
  PROGRESS: 'sakura_learn_progress',
  THEME: 'sakura_learn_theme',
  STATS: 'sakura_learn_stats',
  LAST_SECTION: 'sakura_learn_last_section',
};

export interface Progress {
  completedLessons: string[];
  bestScores: Record<string, number>;
  favorites: string[];
}

export interface Stats {
  streak: number;
  lastVisit: string;
  totalQuizzes: number;
}

export const getProgress = (): Progress => {
  const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
  return data ? JSON.parse(data) : { completedLessons: [], bestScores: {}, favorites: [] };
};

export const saveProgress = (progress: Progress) => {
  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
};

export const getStats = (): Stats => {
  const data = localStorage.getItem(STORAGE_KEYS.STATS);
  return data ? JSON.parse(data) : { streak: 0, lastVisit: '', totalQuizzes: 0 };
};

export const saveStats = (stats: Stats) => {
  localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
};

export const updateStreak = () => {
  const stats = getStats();
  const today = new Date().toISOString().split('T')[0];
  
  if (stats.lastVisit === today) return;
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];
  
  if (stats.lastVisit === yesterdayStr) {
    stats.streak += 1;
  } else {
    stats.streak = 1;
  }
  
  stats.lastVisit = today;
  saveStats(stats);
};

export const getTheme = (): 'light' | 'dark' => {
  return (localStorage.getItem(STORAGE_KEYS.THEME) as 'light' | 'dark') || 'light';
};

export const saveTheme = (theme: 'light' | 'dark') => {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
};
