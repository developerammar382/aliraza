
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CardSkillProps {
  icon: React.ReactNode;
  title: string;
  level: number; // 0-100
}

const CardSkill: React.FC<CardSkillProps> = ({ icon, title, level }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${level}%`,
      transition: { duration: 1, delay: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative p-6 rounded-xl glass-morphism"
    >
      <div className="flex items-center space-x-4 mb-3">
        <div className="text-primary text-2xl">{icon}</div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full"
          variants={progressVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
      </div>
      
      <div className="mt-2 text-right text-sm text-muted-foreground">{level}%</div>
    </motion.div>
  );
};

export default CardSkill;
