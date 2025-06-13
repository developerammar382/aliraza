
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';
import AnimatedText from '../components/AnimatedText';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) return; // Skip mouse tracking on mobile
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate mouse position relative to center
      const x = (e.clientX - rect.left - centerX) / centerX;
      const y = (e.clientY - rect.top - centerY) / centerY;
      
      setMousePosition({ x, y });
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isMobile]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 sm:pb-0">
      <div ref={containerRef} className="container max-w-7xl px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <motion.span 
              className="inline-block text-xs sm:text-sm text-primary font-mono px-3 py-1 border border-primary/30 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Full Stack Web Developer
            </motion.span>
            
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="block">Hi, I'm <span className="text-gradient">Ali Raza</span> </span>
              <AnimatedText 
                text="I build Web Applications" 
                type="heading"
                className="mt-2 block text-3xl sm:text-4xl lg:text-5xl"
              />
            </motion.h1>
            
            <motion.p
              className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I have experiences with HTML, CSS, Tailwind CSS, JavaScript, Jquery, React, and Laravel.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#experience">My Experience</a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            className="h-60 sm:h-80 lg:h-[450px] relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={!isMobile ? {
              transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${-mousePosition.x * 5}deg)`
            } : {}}
          >
            <ThreeScene />
          </motion.div>
        </div>
        
        <motion.div
          className="absolute -bottom-8 sm:bottom-10 left-[40%] sm:left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1,
            duration: 0.5, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        >
          <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground">
            <span className="mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
