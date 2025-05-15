
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

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
  
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden h-80 glass-morphism"
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
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        <motion.h3 
          className="text-xl font-bold mb-2"
          animate={{ opacity: isHovered ? 1 : 0.9 }}
        >
          {title}
        </motion.h3>
        
        <motion.div 
          className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0,
            transition: { duration: 0.3 }
          }}
        >
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <Button asChild size="sm" className="gap-2">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <ArrowRight size={16} />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardProject;
