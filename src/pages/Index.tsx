
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Force the loading state to end after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Disable scroll during preloader
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading ? (
        <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Developer Portfolio</h1>
            <p className="text-sm text-muted-foreground">Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="container py-20">
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Welcome to My <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-xl mb-8 max-w-xl">
                A developer portfolio showcasing my projects and skills.
              </p>
              <Button size="lg">View Projects</Button>
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
