'use client';

import { useState } from 'react';

interface Job {
  company: string;
  position: string;
  period: string;
  description: string[];
  location?: string;
  startYear?: number;
  endYear?: number | 'Present';
}

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const jobs: Job[] = [
    {
      company: 'Just Eat Takeaway',
      position: 'Technology Manager',
      period: 'Present',
      location: 'Bristol, UK',
      startYear: 2023,
      endYear: 'Present',
      description: [
        'Leading engineering teams to deliver high-quality software solutions',
        'Managing technology strategy and implementation',
        'Overseeing project delivery and team performance',
      ],
    },
    {
      company: 'Just Eat Takeaway',
      position: 'Senior Software Engineer',
      period: 'Previous',
      location: 'Bristol, UK',
      startYear: 2021,
      endYear: 2023,
      description: [
        'Building scalable web applications and systems',
        'Designing and implementing robust software solutions',
        'Collaborating with cross-functional teams on technical initiatives',
      ],
    },
    {
      company: 'Team River',
      position: 'Software Engineer',
      period: 'Previous',
      startYear: 2020,
      endYear: 2021,
      description: [
        'Built a SaaS tool for companies to monitor and collaborate around improving key KPIs',
        'Developed features for real-time KPI tracking and team collaboration',
        'Created intuitive interfaces for data visualization and performance metrics',
      ],
    },
    {
      company: 'River Agency',
      position: 'Web Developer',
      period: 'Previous',
      startYear: 2019,
      endYear: 2020,
      description: [
        'Built websites for the automotive sector to improve key metrics and drive dealerships towards excellent customer service',
        'Developed custom web solutions tailored to automotive dealership needs',
        'Focused on improving user experience and conversion metrics for automotive clients',
      ],
    },
    {
      company: 'EDM Group',
      position: 'Software Engineer',
      period: 'Previous',
      startYear: 2018,
      endYear: 2019,
      description: [
        'Developed and maintained software applications',
        'Collaborated with cross-functional teams to deliver high-quality solutions',
        'Implemented best practices for code quality and system architecture',
      ],
    },
  ];

  const hasMore = jobs.length > 2;
  const hiddenCount = isExpanded ? 0 : jobs.length - 2;
  const visibleJobs = jobs.slice(0, 2);
  const hiddenJobs = jobs.slice(2);

  return (
    <section id="experience" className="border-t-2 border-zinc-300 bg-white dark:border-zinc-700 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Experience
        </h2>
        <div className="relative pl-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-300 dark:bg-zinc-700" />
          
          <div className="space-y-8">
            {/* Always visible jobs */}
            {visibleJobs.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline marker and year */}
                <div className="absolute -left-10 top-0 flex flex-col items-center gap-2">
                  <div className="relative z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-700 dark:bg-black" />
                  {job.startYear && (
                    <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                      {job.startYear}
                    </div>
                  )}
                  {job.endYear && job.endYear !== job.startYear && (
                    <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                      {job.endYear}
                    </div>
                  )}
                </div>
                
                {/* Job card */}
                <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {job.company}
                </h3>
                <p className="mt-1 text-lg text-zinc-700 dark:text-zinc-300">
                  {job.position}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  {job.location && (
                    <>
                      <span>{job.location}</span>
                      <span>•</span>
                    </>
                  )}
                  <span>{job.period}</span>
                </div>
              </div>
              <ul className="ml-4 list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
                {job.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
                </ul>
                </div>
              </div>
            ))}

            {/* Collapsible hidden jobs */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-8">
                {isExpanded && hiddenJobs.map((job, index) => (
                  <div key={index + 2} className="relative">
                    {/* Timeline marker and year */}
                    <div className="absolute -left-10 top-0 flex flex-col items-center gap-2">
                      <div className="relative z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-700 dark:bg-black" />
                      {job.startYear && (
                        <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                          {job.startYear}
                        </div>
                      )}
                      {job.endYear && job.endYear !== job.startYear && (
                        <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                          {job.endYear}
                        </div>
                      )}
                    </div>
                    
                    {/* Job card */}
                    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-lg text-zinc-700 dark:text-zinc-300">
                      {job.position}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-zinc-600 dark:text-zinc-400">
                      {job.location && (
                        <>
                          <span>{job.location}</span>
                          <span>•</span>
                        </>
                      )}
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <ul className="ml-4 list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                    </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative inline-flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
            {!isExpanded && hiddenCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-200 px-1.5 text-xs font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300">
                {hiddenCount}
              </span>
            )}
          </button>
        </div>
      )}
      </div>
    </section>
  );
}

