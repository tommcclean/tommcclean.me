'use client';

import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [bouncingId, setBouncingId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set up Intersection Observer to track which section is in view
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            setActiveSection(id);
          } else {
            // If no id, it's likely the hero section (home)
            const scrollY = window.scrollY;
            if (scrollY < 200) {
              setActiveSection('home');
            }
          }
        }
      });
    }, observerOptions);

    // Observe all sections with IDs
    const sections = ['about', 'experience', 'projects', 'books', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Observe the hero section (first section) for home
    const hero = document.querySelector('section:first-of-type');
    if (hero && observerRef.current) {
      observerRef.current.observe(hero);
    }

    // Check initial scroll position
    const checkInitialSection = () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) {
        setActiveSection('home');
      }
    };
    checkInitialSection();

    // Also listen to scroll events for home detection
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Trigger bounce animation
    setBouncingId(sectionId);
    setTimeout(() => setBouncingId(null), 600);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
  };

  const getIcon = (id: string) => {
    const iconClass = "h-4 w-4";
    switch (id) {
      case 'home':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'about':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'experience':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'projects':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'books':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'contact':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Books', id: 'books' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 right-0 z-50 hidden md:block">
      <nav className="flex flex-col items-end gap-2 p-6">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const isBouncing = bouncingId === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex cursor-pointer items-center gap-2 text-sm font-medium transition-all ${
                isActive
                  ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                  : 'text-white/80 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'
              } ${isBouncing ? 'animate-bounce-once' : ''}`}
            >
              <span>{item.label}</span>
              {getIcon(item.id)}
            </button>
          );
        })}
      </nav>
    </header>
  );
}

