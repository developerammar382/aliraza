
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const WorkExperienceSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const experiences = [
    {
      position: "Senior Frontend Developer",
      company: "Blue Horn Technologies",
      year: "2023 - Present",
      description: "Lead frontend development for enterprise clients using React, Next.js and modern JavaScript frameworks. Implemented responsive designs and optimized application performance."
    },
    {
      position: "Web Developer",
      company: "Adrightly",
      year: "2022 - 2023",
      description: "Developed and maintained client websites using HTML, CSS, JavaScript, and various content management systems. Collaborated with design team to implement responsive UI/UX designs."
    },
    {
      position: "Frontend Intern",
      company: "Multex. Pk",
      year: "2022",
      description: "Assisted in developing and debugging frontend components. Gained hands-on experience with modern web development practices and tools."
    }
  ];
  
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 relative bg-secondary/20">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work <span className="text-gradient">Experience</span>
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
            My professional journey in web development and design.
          </motion.p>
        </div>
        
        <div 
          ref={ref}
          className="space-y-6 md:space-y-8"
        >
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="glass-morphism border-0 overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-12 h-12 rounded-full glass-morphism flex items-center justify-center text-primary shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.position}</h3>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar size={14} className="mr-2" />
                    <span>{item.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-1/3 left-0 w-full sm:w-80 h-80 bg-primary/5 rounded-full filter blur-3xl z-0" />
    </section>
  );
};

export default WorkExperienceSection;
