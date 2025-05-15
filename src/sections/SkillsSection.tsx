
import React from 'react';
import { motion } from 'framer-motion';
import CardSkill from '../components/CardSkill';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Server, FileCode, Cpu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const SkillsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const isMobile = useIsMobile();
  
  const technicalSkills = [
    { icon: <Code />, title: 'Frontend Development', level: 90 },
    { icon: <Server />, title: 'Backend Development', level: 75 },
    { icon: <Globe />, title: 'Responsive Design', level: 95 },
    { icon: <FileCode />, title: 'React/Next.js', level: 85 },
    { icon: <Database />, title: 'Laravel/Statamic', level: 70 },
    { icon: <Cpu />, title: 'UI/UX Implementation', level: 80 }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 relative bg-secondary/20">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1.5 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <motion.p
            className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I've developed expertise in various technologies and methodologies through years of hands-on experience.
          </motion.p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {technicalSkills.map((skill, index) => (
            <CardSkill
              key={index}
              icon={skill.icon}
              title={skill.title}
              level={skill.level}
            />
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Tools & Technologies</h3>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Laravel', 'VS Code', 'Git'].map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full glass-morphism flex items-center justify-center text-primary mb-2">
                  <span className="text-base sm:text-lg font-bold">{tech.charAt(0)}</span>
                </div>
                <span className="text-xs sm:text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl z-0" />
    </section>
  );
};

export default SkillsSection;
