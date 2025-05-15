
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CardProject from '../components/CardProject';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with product management, cart functionality, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/placeholder.svg',
    projectUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and team collaboration with real-time updates.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    imageUrl: '/placeholder.svg',
    projectUrl: '#'
  },
  {
    title: 'Financial Dashboard',
    description: 'An analytics dashboard for tracking financial data, expenses, and investments with interactive charts.',
    tags: ['TypeScript', 'D3.js', 'Express'],
    imageUrl: '/placeholder.svg',
    projectUrl: '#'
  },
  {
    title: 'Social Media Platform',
    description: 'A social networking application with user profiles, posts, comments, and real-time messaging.',
    tags: ['React', 'GraphQL', 'PostgreSQL'],
    imageUrl: '/placeholder.svg',
    projectUrl: '#'
  },
  {
    title: 'Travel Booking System',
    description: 'A platform for booking travel accommodations, flights, and experiences with user reviews.',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    imageUrl: '/placeholder.svg',
    projectUrl: '#'
  },
  {
    title: 'Weather Application',
    description: 'A weather forecasting app with location-based predictions, alerts, and visual weather mapping.',
    tags: ['React', 'Redux', 'OpenWeather API'],
    imageUrl: '/placeholder.svg',
    projectUrl: '#'
  }
];

const ProjectsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectsPerPage = 3;
  const pageCount = Math.ceil(projects.length / projectsPerPage);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % pageCount);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + pageCount) % pageCount);
  };
  
  const visibleProjects = projects.slice(
    activeIndex * projectsPerPage,
    (activeIndex + 1) * projectsPerPage
  );
  
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1.5 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <motion.p
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Explore some of my recent projects showcasing my technical skills and creative problem-solving.
          </motion.p>
        </div>
        
        <div className="relative">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {visibleProjects.map((project, index) => (
              <CardProject
                key={activeIndex * projectsPerPage + index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </motion.div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              disabled={activeIndex === 0}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeIndex === index ? 'bg-primary' : 'bg-primary/30'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              disabled={activeIndex === pageCount - 1}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
