'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import type { Job } from '@/lib/slices/experienceSlice';

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);
  const experience = useAppSelector((state) => state.experience);
  const jobs: Job[] = experience.jobs;

  const hasMore = jobs.length > 2;
  const hiddenCount = isExpanded ? 0 : jobs.length - 2;
  const visibleJobs = jobs.slice(0, 2);
  const hiddenJobs = jobs.slice(2);

  return (
    <section id="experience" className="border-t-2 border-zinc-300 bg-white dark:border-zinc-700 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {experience.title}
        </h2>
        <div className="space-y-8">
          {/* Always visible jobs */}
          {visibleJobs.map((job, index) => (
            <div key={index}>
              {/* Job card */}
              <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex items-start gap-4">
                  {/* Logo box */}
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                      {job.logo ? (
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          width={72}
                          height={72}
                          className="h-full w-full rounded-lg object-contain"
                        />
                      ) : (
                        <div className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-800" />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1">
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
                      {job.startDate && job.endDate && (
                        <span>
                          {job.startDate} - {job.endDate}
                        </span>
                      )}
                      {!job.startDate && !job.endDate && job.period && (
                        <span>{job.period}</span>
                      )}
                    </div>
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
              {hiddenJobs.map((job, index) => (
                <div key={index + 2}>
                  {/* Job card */}
                  <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="mb-4 flex items-start gap-4">
                      {/* Logo box */}
                      <div className="mr-4 flex-shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                          {job.logo ? (
                            <Image
                              src={job.logo}
                              alt={`${job.company} logo`}
                              width={56}
                              height={56}
                              className="h-full w-full rounded-lg object-contain"
                            />
                          ) : (
                            <div className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-800" />
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-1">
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
                          {job.startDate && job.endDate && (
                            <span>
                              {job.startDate} - {job.endDate}
                            </span>
                          )}
                          {!job.startDate && !job.endDate && job.period && (
                            <span>{job.period}</span>
                          )}
                        </div>
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
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              const wasExpanded = isExpanded;
              setIsExpanded(!isExpanded);
              
              // If collapsing, scroll to experience section after animation completes
              if (wasExpanded) {
                setTimeout(() => {
                  const experienceSection = document.getElementById('experience');
                  if (experienceSection) {
                    experienceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 500); // Wait for the 500ms collapse animation to complete
              }
            }}
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

