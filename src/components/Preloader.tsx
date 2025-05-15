
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [onComplete]);
  
  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ type: "spring", duration: 1.5 }}
            className="relative w-20 h-20 mb-8"
          >
            <div className="absolute inset-0 rounded-full border-4 border-secondary" />
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-primary"
              style={{ 
                clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)` 
              }}
            />
            <motion.div 
              className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full"
              animate={{ 
                rotate: progress * 3.6 // 0-100 to 0-360 degrees
              }}
              style={{ 
                originX: 0.5, 
                originY: 2.5 // Makes the rotation point the center of the circle
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold mb-2 text-gradient">Developer Portfolio</h1>
            <p className="text-sm text-muted-foreground">Loading... {progress}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
