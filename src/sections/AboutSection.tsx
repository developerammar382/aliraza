
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'CSS/SCSS', 'Tailwind CSS'];
  
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1.5 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative aspect-square max-w-md mx-auto"
            initial={{ opacity: 0, rotateY: 45 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Profile Image */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg glass-morphism overflow-hidden mx-auto">
                  <img 
                    src="/placeholder.svg"
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-10 -left-5 w-16 h-16 rounded-lg glass-morphism flex items-center justify-center text-primary"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl font-bold">5+</span>
                </motion.div>
                <motion.div 
                  className="absolute bottom-5 -right-5 w-20 h-20 rounded-lg glass-morphism flex items-center justify-center text-primary p-2 text-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-xs font-medium">Years Experience</span>
                </motion.div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-primary/20 animate-spin-slow" />
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDuration: '25s' }} />
          </motion.div>
          
          <div ref={ref} className="space-y-6">
            <AnimatedText 
              text="Creating Digital Experiences Since 2018"
              className="text-2xl md:text-3xl font-bold mb-4"
              type="heading"
            />
            
            <AnimatedText 
              text="I'm a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. My journey in web development began over 5 years ago, and I've been crafting engaging digital experiences ever since."
              className="text-muted-foreground"
            />
            
            <AnimatedText 
              text="I specialize in building responsive, accessible, and performant web applications using modern frameworks and technologies. My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet but exceed client expectations."
              className="text-muted-foreground"
            />
            
            <motion.div
              className="flex flex-wrap gap-2 mt-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, staggerChildren: 0.1 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm bg-secondary text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
