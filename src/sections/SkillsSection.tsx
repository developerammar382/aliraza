
import React from 'react';
import { motion } from 'framer-motion';
import CardSkill from '../components/CardSkill';
import { useInView } from 'react-intersection-observer';
import { Python, Database, Globe, Server, Code, Cpu } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const technicalSkills = [
    { icon: <Code />, title: 'Frontend Development', level: 90 },
    { icon: <Server />, title: 'Backend Development', level: 85 },
    { icon: <Database />, title: 'Database Management', level: 80 },
    { icon: <Globe />, title: 'Web Performance', level: 75 },
    { icon: <Python />, title: 'Data Analysis', level: 70 },
    { icon: <Cpu />, title: 'DevOps', level: 65 }
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
    <section id="skills" className="py-20 md:py-32 relative bg-secondary/20">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
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
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Tools & Technologies</h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full glass-morphism flex items-center justify-center text-primary mb-2">
                  {/* You would replace this with actual tech logos */}
                  <span className="text-lg font-bold">{tech.charAt(0)}</span>
                </div>
                <span className="text-sm">{tech}</span>
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
