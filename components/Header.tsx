'use client';

import { useState, useEffect, useRef } from 'react';
import { useAppSelector } from '@/lib/hooks';

export default function Header() {
  const navigation = useAppSelector((state) => state.navigation);
  const user = useAppSelector((state) => state.user);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const initials = user.name
    .split(' ')
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .map((n) => n[0])
    .join('');

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    navigation.items.filter((i) => i.id !== 'home').forEach((item) => {
      const el = document.getElementById(item.id);
      if (el && observerRef.current) observerRef.current.observe(el);
    });
    const hero = document.querySelector('section:first-of-type');
    if (hero && observerRef.current) observerRef.current.observe(hero);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 200) setActiveSection('home');
    };
    window.addEventListener('scroll', handleScroll);
    return () => { observerRef.current?.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection('home'); }
    else { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setActiveSection(id); }
  };

  const getIcon = (id: string) => {
    const cls = 'h-5 w-5';
    switch (id) {
      case 'home':           return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
      case 'about':          return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
      case 'experience':     return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
      case 'projects':       return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
      case 'books':          return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
      case 'certifications': return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;
      case 'contact':        return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
      default: return null;
    }
  };

  const centreItems = navigation.items.filter((i) => i.id !== 'home');

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 backdrop-blur-sm border-b ${scrolled ? 'bg-white/98 dark:bg-slate-950/98 border-slate-200 dark:border-slate-800 shadow-sm' : 'bg-white/90 dark:bg-slate-950/90 border-transparent'}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

          <button onClick={() => scrollToSection('home')} className="flex cursor-pointer items-center gap-2.5 transition-opacity hover:opacity-80">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white tracking-wide shadow-sm">
              {initials}
            </div>
            <span className="hidden font-semibold text-slate-900 dark:text-slate-100 sm:block">
              {user.name.split(' ').slice(0, 2).join(' ')}
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {centreItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button key={item.id} onClick={() => scrollToSection(item.id)}
                  className={`relative cursor-pointer px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}>
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-indigo-600 transition-all duration-300 ${isActive ? 'w-5 opacity-100' : 'w-0 opacity-0'}`} />
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => scrollToSection('contact')}
              className="hidden cursor-pointer items-center gap-2 rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md md:flex">
              Get in touch
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <button onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 md:hidden" aria-label="Open menu">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      <div onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} />

      {/* Mobile panel */}
      <div className={`fixed right-0 top-0 bottom-0 z-50 flex w-72 flex-col bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-out md:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">{initials}</div>
            <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{user.name.split(' ').slice(0, 2).join(' ')}</span>
          </div>
          <button onClick={() => setMobileOpen(false)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300" aria-label="Close menu">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navigation.items.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button key={item.id} onClick={() => scrollToSection(item.id)}
                className={`mb-1 flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-left transition-colors ${isActive ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}>
                <span className={isActive ? 'text-indigo-600' : 'text-slate-400 dark:text-slate-500'}>{getIcon(item.id)}</span>
                {item.label}
                {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-indigo-600" />}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-slate-100 dark:border-slate-800 p-4">
          <button onClick={() => scrollToSection('contact')}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700">
            Get in touch
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </>
  );
}
