'use client';

import { useAppSelector } from '@/lib/hooks';

export default function Hero() {
  const user = useAppSelector((state) => state.user);
  const social = useAppSelector((state) => state.social);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated darker gradient background with black */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-950/80 via-purple-950/80 via-pink-950/80 to-black" />
      <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-br from-cyan-950/30 via-purple-950/30 via-pink-950/30 to-black bg-[length:200%_200%]" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative inline-block">
          {/* Moving glow effect */}
          <div className="absolute inset-0 -z-10 animate-glow-move rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 via-pink-500 to-cyan-400 bg-[length:200%_100%] blur-2xl opacity-60" />
          <h1 className="relative mb-6 inline-block bg-white px-8 py-4 text-5xl font-bold tracking-tight text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] sm:text-6xl md:text-7xl">
            {user.name}
          </h1>
        </div>
        <p className="mb-10 max-w-2xl text-xl leading-relaxed text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-2xl">
          {user.bio}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-base">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm transition-all">
            <span className="inline-flex h-5 w-5 items-center justify-center text-base leading-none">📍</span>
            <span className="font-medium text-white drop-shadow-md">{user.location}</span>
          </div>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            <svg className="h-5 w-5 fill-white drop-shadow-md transition-colors group-hover:fill-cyan-200" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="font-medium text-white drop-shadow-md transition-colors group-hover:text-cyan-200">
              LinkedIn
            </span>
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            <svg className="h-5 w-5 fill-white drop-shadow-md transition-colors group-hover:fill-cyan-200" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="font-medium text-white drop-shadow-md transition-colors group-hover:text-cyan-200">
              GitHub
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Arrow */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Scroll to about section"
      >
        <svg
          className="h-6 w-6 animate-bounce text-black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}

