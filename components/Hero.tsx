'use client';

import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';

const JUST_EAT_FAVICON = 'https://www.just-eat.co.uk/favicon.ico';

export default function Hero() {
  const user = useAppSelector((state) => state.user);
  const social = useAppSelector((state) => state.social);

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white dark:bg-slate-950 px-6 pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-200 via-violet-200 to-purple-200 dark:from-indigo-900/40 dark:via-violet-900/30 dark:to-purple-900/20 opacity-60 blur-3xl" />
        <div className="animate-blob-delay absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-100 via-blue-100 to-cyan-100 dark:from-indigo-900/30 dark:via-blue-900/20 dark:to-cyan-900/10 opacity-50 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 h-[350px] w-[350px] rounded-full bg-violet-100 dark:bg-violet-900/20 opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl text-center md:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
              </span>
              {user.title}
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-800 dark:from-white dark:via-indigo-300 dark:to-violet-300 bg-clip-text text-transparent">
                {user.name}
              </span>
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-500 dark:text-slate-400">{user.bio}</p>

            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {user.companyName && (
                <a href="https://www.justeattakeaway.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm transition-all hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md">
                  <img src={JUST_EAT_FAVICON} alt="" className="h-4 w-4 object-contain" aria-hidden />
                  {user.companyName}
                </a>
              )}
              <a href="https://www.google.com/maps/place/Bristol,+UK" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm transition-all hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md">
                <span aria-hidden>📍</span>{user.location}
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm transition-all hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md">
                <svg className="h-4 w-4 fill-[#0077b5]" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn
              </a>
              <a href={social.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm transition-all hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                GitHub
              </a>
            </div>
          </div>

          {user.profilePicture && (
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="animate-pulse-ring absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 opacity-30" />
                <div className="animate-pulse-ring absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 opacity-20" style={{ animationDelay: '0.8s' }} />
                <div className="relative rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-purple-600 p-1 shadow-2xl">
                  <div className="h-56 w-56 overflow-hidden rounded-full sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                    <Image src={user.profilePicture} alt={`${user.name} profile picture`} width={288} height={288} className="h-full w-full object-cover" priority />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <button onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 shadow-md transition-all hover:scale-110 hover:border-indigo-200 hover:shadow-lg"
        aria-label="Scroll to about section">
        <svg className="h-5 w-5 animate-bounce text-indigo-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}
