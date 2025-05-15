
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  // On mobile, always show the details
  const shouldShowDetails = isMobile || isHovered;
  
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden h-64 sm:h-72 md:h-80 glass-morphism"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 z-20">
        <motion.h3 
          className="text-lg sm:text-xl font-bold mb-2"
          animate={{ opacity: isHovered ? 1 : 0.9 }}
        >
          {title}
        </motion.h3>
        
        <motion.div 
          className={`overflow-hidden transition-all duration-300 ${shouldShowDetails ? 'opacity-100' : 'opacity-0 h-0'}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: shouldShowDetails ? 'auto' : 0,
            opacity: shouldShowDetails ? 1 : 0,
            transition: { duration: 0.3 }
          }}
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <Button asChild size="sm" className="gap-2 w-full sm:w-auto">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <ArrowRight size={14} />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardProject;
