
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { title: 'About', href: '#about' },
  { title: 'Education', href: '#education' },
  { title: 'Experience', href: '#experience' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass-morphism' : 'py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl sm:text-2xl font-bold text-gradient">
            ALI RAZA<span className="text-primary">.</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <nav>
              <ul className="flex space-x-3 lg:space-x-6">
                {navLinks.map(link => (
                  <li key={link.title}>
                    <a 
                      href={link.href} 
                      className="relative text-sm font-medium transition-colors hover:text-primary group"
                    >
                      {link.title}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <DarkModeToggle />
            
            <Button asChild size="sm">
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-morphism"
          >
            <nav className="container mx-auto px-4 py-6">
              <ul className="flex flex-col space-y-4">
                {navLinks.map(link => (
                  <li key={link.title}>
                    <a 
                      href={link.href} 
                      className="block text-lg font-medium transition-colors hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <Button asChild size="sm" className="w-full">
                    <a href="#contact" onClick={closeMobileMenu}>
                      Get In Touch
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
