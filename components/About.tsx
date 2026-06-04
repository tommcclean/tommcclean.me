'use client';

import { useAppSelector } from '@/lib/hooks';
import FadeIn from '@/components/FadeIn';

export default function About() {
  const about = useAppSelector((state) => state.about);

  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-24">
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-100 dark:bg-indigo-900/30 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative mb-12">
            <span className="pointer-events-none absolute -top-6 left-0 select-none text-[90px] font-black leading-none text-slate-900/[0.04] dark:text-white/[0.05]">01</span>
            <div className="relative">
              <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-slate-50">{about.title}</h2>
              <div className="h-1 w-12 rounded-full bg-indigo-600" />
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn delay={100}>
            <div className="space-y-8">
              <div className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
                {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{about.hobbies.title}</h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">{about.hobbies.description}</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{about.managementSkills.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {about.managementSkills.skills.map((skill) => (
                    <span key={skill} className="cursor-default rounded-full border border-indigo-100 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950 px-3 py-1.5 text-sm font-medium text-indigo-700 dark:text-indigo-300 transition-all hover:scale-105 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:shadow-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{about.technicalSkills.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {about.technicalSkills.skills.map((skill) => (
                    <span key={skill} className="cursor-default rounded-full border border-violet-100 dark:border-violet-800 bg-violet-50 dark:bg-violet-950 px-3 py-1.5 text-sm font-medium text-violet-700 dark:text-violet-300 transition-all hover:scale-105 hover:bg-violet-100 dark:hover:bg-violet-900 hover:shadow-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
