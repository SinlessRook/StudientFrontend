import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  // Set the initial theme based on the system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setIsDark(!isDark);
    const newTheme = !isDark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <div className="p-5">
      <motion.button
        onClick={toggleTheme}
        initial={{ rotate: 0 }}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg cursor-pointer border border-gray-300 dark:border-gray-600 w-24"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-yellow-500"
        >
          🌙
        </motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-gray-700 dark:text-gray-300"
        >
          ☀️
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
