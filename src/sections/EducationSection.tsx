
import React from 'react';
import { motion } from 'framer-motion';
import { School, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const EducationSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Virtual University Pakistan",
      year: "2014 - Present",
      description: "Currently pursuing a degree with a focus on web development and user interface design."
    },
    {
      degree: "Web Development Certification",
      institution: "Tech Institute",
      year: "2023",
      description: "Advanced certification in modern web frameworks and responsive design principles."
    }
  ];
  
  return (
    <section id="education" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-gradient">Education</span>
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
            My academic journey that has shaped my career and expertise.
          </motion.p>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full glass-morphism border-0 overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-12 h-12 rounded-full glass-morphism flex items-center justify-center text-primary shrink-0">
                    <School size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
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
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl z-0" />
    </section>
  );
};

export default EducationSection;
