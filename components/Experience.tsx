'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import FadeIn from '@/components/FadeIn';
import type { Job } from '@/lib/slices/experienceSlice';

function JobCard({ job }: { job: Job }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm transition-all hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md">
      <div className="mb-5 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
          {job.logo ? (
            <Image src={job.logo} alt={`${job.company} logo`} width={48} height={48} className="h-full w-full object-contain p-1" />
          ) : (
            <div className="h-full w-full bg-slate-100 dark:bg-slate-700" />
          )}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">{job.company}</h3>
          <p className="mt-0.5 font-medium text-indigo-600 dark:text-indigo-400">{job.position}</p>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 sm:justify-start">
            {job.location && <span>{job.location}</span>}
            {job.location && (job.startDate || job.period) && <span>·</span>}
            {job.startDate && job.endDate && <span>{job.startDate} – {job.endDate}</span>}
            {!job.startDate && !job.endDate && job.period && <span>{job.period}</span>}
          </div>
        </div>
      </div>
      <ul className="space-y-1.5">
        {job.description.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />{item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);
  const experience = useAppSelector((state) => state.experience);
  const jobs: Job[] = experience.jobs;
  const hasMore = jobs.length > 2;
  const hiddenCount = isExpanded ? 0 : jobs.length - 2;
  const visibleJobs = jobs.slice(0, 2);
  const hiddenJobs = jobs.slice(2);

  return (
    <section id="experience" className="relative overflow-hidden bg-white dark:bg-slate-950 py-24">
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-violet-50 dark:bg-violet-900/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative mb-12">
            <span className="pointer-events-none absolute -top-6 left-0 select-none text-[90px] font-black leading-none text-slate-900/[0.04] dark:text-white/[0.05]">02</span>
            <div className="relative">
              <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-slate-50">{experience.title}</h2>
              <div className="h-1 w-12 rounded-full bg-indigo-600" />
              {experience.description && <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">{experience.description}</p>}
            </div>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-6 top-7 bottom-0 w-px bg-gradient-to-b from-indigo-300 dark:from-indigo-600 via-violet-200 dark:via-violet-700 to-transparent md:left-7" />
          <div className="space-y-8">
            {visibleJobs.map((job, index) => (
              <FadeIn key={index} delay={index * 120}>
                <div className="relative flex gap-5 md:gap-7">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-200 dark:border-indigo-700 bg-white dark:bg-slate-900 shadow-sm md:h-14 md:w-14">
                    {job.logo ? <Image src={job.logo} alt={`${job.company} logo`} width={40} height={40} className="h-9 w-9 rounded-full object-contain md:h-10 md:w-10" /> : <div className="h-6 w-6 rounded-full bg-indigo-200 dark:bg-indigo-700" />}
                  </div>
                  <div className="flex-1 pb-2"><JobCard job={job} /></div>
                </div>
              </FadeIn>
            ))}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="space-y-8">
                {hiddenJobs.map((job, index) => (
                  <div key={index + 2} className="relative flex gap-5 md:gap-7">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm md:h-14 md:w-14">
                      {job.logo ? <Image src={job.logo} alt={`${job.company} logo`} width={40} height={40} className="h-9 w-9 rounded-full object-contain md:h-10 md:w-10" /> : <div className="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-600" />}
                    </div>
                    <div className="flex-1 pb-2"><JobCard job={job} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {hasMore && (
          <FadeIn delay={250}>
            <div className="mt-8 pl-16 md:pl-20">
              <button onClick={() => { const was = isExpanded; setIsExpanded(!isExpanded); if (was) setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 500); }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm transition-all hover:border-indigo-200 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md">
                {isExpanded ? 'Show less' : <><span>Show more</span><span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-xs font-bold text-indigo-700 dark:text-indigo-300">{hiddenCount}</span></>}
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
