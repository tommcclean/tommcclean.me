'use client';

import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import FadeIn from '@/components/FadeIn';
import type { Project } from '@/lib/slices/projectsSlice';

const CARD_ACCENTS = ['border-t-indigo-500','border-t-violet-500','border-t-emerald-500','border-t-amber-500','border-t-rose-500','border-t-cyan-500'];
const PLACEHOLDER_GRADIENTS = ['from-indigo-50 to-violet-100 dark:from-indigo-950 dark:to-violet-900','from-violet-50 to-purple-100 dark:from-violet-950 dark:to-purple-900','from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-900','from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-900'];

export default function Projects() {
  const projectsState = useAppSelector((state) => state.projects);
  const projects: Project[] = projectsState.projects;

  return (
    <section id="projects" className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-24">
      <div className="pointer-events-none absolute -top-20 -right-10 h-80 w-80 rounded-full bg-indigo-100 dark:bg-indigo-900/30 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-violet-100 dark:bg-violet-900/30 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative mb-12">
            <span className="pointer-events-none absolute -top-6 left-0 select-none text-[90px] font-black leading-none text-slate-900/[0.04] dark:text-white/[0.05]">03</span>
            <div className="relative">
              <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-slate-50">{projectsState.title}</h2>
              <div className="h-1 w-12 rounded-full bg-indigo-600" />
              <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">{projectsState.description}</p>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const accentClass = CARD_ACCENTS[index % CARD_ACCENTS.length];
            const gradientClass = PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length];
            return (
              <FadeIn key={index} delay={index * 80}>
                <div className={`group flex h-full flex-col overflow-hidden rounded-2xl border-t-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] dark:hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)] ${accentClass}`}>
                  {project.image ? (
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                      <Image src={project.image} alt={`${project.title} screenshot`} fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      {project.badge && <span className="absolute right-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">{project.badge}</span>}
                    </div>
                  ) : (
                    <div className={`relative flex aspect-video w-full items-center justify-center bg-gradient-to-br ${gradientClass}`}>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-sm">
                        <svg className="h-8 w-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                      </div>
                      {project.badge && <span className="absolute right-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">{project.badge}</span>}
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-50">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                          {project.title}
                          <svg className="h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      ) : project.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full bg-slate-100 dark:bg-slate-700 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
