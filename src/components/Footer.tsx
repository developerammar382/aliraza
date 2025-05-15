
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 md:py-12 bg-secondary/50">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <motion.h3 
              className="text-xl md:text-2xl font-bold text-gradient mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              DEV<span className="text-primary">.</span>
            </motion.h3>
            <motion.p 
              className="text-xs md:text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Creating digital experiences that matter.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex space-x-4 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
          </motion.div>
          
          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full glass-morphism flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            whileHover={{ y: -3, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
        
        <motion.div 
          className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-secondary text-center text-xs md:text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} DEV. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
