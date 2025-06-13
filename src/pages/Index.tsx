
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import EducationSection from '@/sections/EducationSection';
import WorkExperienceSection from '@/sections/WorkExperienceSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import MouseFollower from '@/components/MouseFollower';
import Preloader from '@/components/Preloader';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  
  // Hide preloader after it completes
  const handlePreloaderComplete = () => {
    setIsLoading(false);
    // Preload complete - enable smooth scrolling
    document.body.style.overflow = 'auto';
  };
  
  // Disable scroll during preloader
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    }
  }, [isLoading]);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <>
          {!isMobile && <MouseFollower />}
          <ParticleBackground />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            {/* <EducationSection /> */}
            <WorkExperienceSection />
            <SkillsSection />
            {/* <ProjectsSection /> */}
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
