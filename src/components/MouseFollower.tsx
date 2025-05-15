
import React, { useEffect, useRef } from 'react';

const MouseFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const highlight = highlightRef.current;
    
    if (!cursor || !highlight) return;
    
    const updatePosition = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      highlight.style.left = `${e.clientX}px`;
      highlight.style.top = `${e.clientY}px`;
    };
    
    const handleMouseEnterLink = () => {
      cursor.style.transform = 'scale(1.5)';
      highlight.style.opacity = '1';
    };
    
    const handleMouseLeaveLink = () => {
      cursor.style.transform = 'scale(1)';
      highlight.style.opacity = '0';
    };
    
    document.addEventListener('mousemove', updatePosition);
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
      link.classList.add('hoverable');
    });
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);
  
  return (
    <>
      <div id="mouse-follower" ref={cursorRef}></div>
      <div id="cursor-highlight" ref={highlightRef}></div>
    </>
  );
};

export default MouseFollower;
