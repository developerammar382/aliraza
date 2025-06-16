
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
      position: "Senior Full Stack Developer",
      company: "Wivro",
      year: "Feb 2024 - March 2025",
      description:
        "Led full-stack development for enterprise-level applications, focusing on frontend architecture with React, and Tailwind CSS. Collaborated closely with backend teams using PHP and Laravel to deliver scalable, performant, and accessible web solutions. Played a key role in optimizing application performance and enhancing user experience across platforms."
    },
    {
      position: "Full Stack Web Developer",
      company: "Abode Pvt. Ltd",
      year: "Aug 2023 - Jan 2024",
      description:
        "Developed and maintained dynamic websites and web applications using JavaScript, PHP, and CMS platforms. Integrated responsive UI/UX designs in collaboration with designers, ensuring cross-browser compatibility and mobile responsiveness. Contributed to both frontend and backend improvements using Laravel and modern frontend tools."
    },
    {
      position: "Web App & Web Development",
      company: "Orbit Solutions",
      year: "Sep 2022 - Aug 2023",
      description:
        "Assisted in developing, testing, and debugging web application components. Gained hands-on experience with modern frontend frameworks and tools, including React and Tailwind CSS. Supported senior developers in implementing best practices for responsive and accessible design."
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
