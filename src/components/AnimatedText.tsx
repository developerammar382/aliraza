
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  type?: 'paragraph' | 'heading' | 'typing';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  once = true,
  type = 'paragraph' 
}) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1
  });

  const [displayText, setDisplayText] = useState('');
  
  // For typing effect
  useEffect(() => {
    if (type === 'typing' && inView) {
      setDisplayText('');
      let index = 0;
      
      const intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayText(prev => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 70);
      
      return () => clearInterval(intervalId);
    }
  }, [inView, text, type]);

  if (type === 'typing') {
    return (
      <div ref={ref} className={`relative ${className}`}>
        <span className="inline-block whitespace-nowrap overflow-hidden">
          {displayText}
          <span className="ml-0.5 inline-block w-1 h-5 bg-primary animate-blink"></span>
        </span>
      </div>
    );
  }

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  if (type === 'heading') {
    return (
      <motion.h2
        ref={ref}
        className={className}
        variants={headingVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letterVariants}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h2>
    );
  }

  // Default to paragraph type
  return (
    <motion.p
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {text.split(' ').map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-1"
          custom={index}
          variants={paragraphVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedText;
