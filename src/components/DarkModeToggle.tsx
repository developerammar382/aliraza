
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDarkMode) {
      root.classList.remove('light');
    } else {
      root.classList.add('light');
    }
  }, [isDarkMode]);
  
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full p-1 glass-morphism"
      whileTap={{ scale: 0.9 }}
    >
      <motion.div 
        className="absolute top-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center"
        animate={{ 
          x: isDarkMode ? 1 : 25 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
      >
        {isDarkMode ? (
          <Moon className="h-3 w-3 text-background" />
        ) : (
          <Sun className="h-3 w-3 text-background" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
