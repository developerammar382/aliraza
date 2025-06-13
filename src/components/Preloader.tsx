import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import myImage from './../../public/my-img.jpeg';
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
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1.5 }}
            className="relative w-20 h-20 mb-8"
          >
            {/* Outer Circle */}
            <div className="absolute inset-0 rounded-full border-4 border-secondary" />

            {/* Progress Circle */}
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-primary"
              style={{ 
                clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)` 
              }}
            />

            {/* Center Image */}
            <div className="absolute inset-2 rounded-full overflow-hidden flex items-center justify-center bg-white">
              <img
                src={myImage} 
                alt="Loader Icon"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold mb-2 text-gradient">Muhammad Ali Raza</h1>
            <p className="text-sm text-muted-foreground">Loading... {progress}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
