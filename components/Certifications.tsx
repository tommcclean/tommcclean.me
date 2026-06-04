'use client';

import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import FadeIn from '@/components/FadeIn';
import type { Certification } from '@/lib/slices/certificationsSlice';

export default function Certifications() {
  const certificationsState = useAppSelector((state) => state.certifications);
  const certifications: Certification[] = certificationsState.certifications;

  return (
    <section id="certifications" className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-24">
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet-100 dark:bg-violet-900/20 blur-3xl opacity-70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative mb-12">
            <span className="pointer-events-none absolute -top-6 left-0 select-none text-[90px] font-black leading-none text-slate-900/[0.04] dark:text-white/[0.05]">05</span>
            <div className="relative">
              <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-slate-50">{certificationsState.title}</h2>
              <div className="h-1 w-12 rounded-full bg-indigo-600" />
              {certificationsState.description && <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">{certificationsState.description}</p>}
            </div>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <FadeIn key={index} delay={index * 80}>
              <div className="group flex flex-col items-center gap-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm transition-all hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md sm:flex-row sm:items-start">
                {cert.logo && (
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                    <Image src={cert.logo} alt={`${cert.name} logo`} width={48} height={48} className="h-full w-full object-contain p-1" />
                  </div>
                )}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-slate-50">
                    {cert.credentialUrl ? (
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                        {cert.name}
                        <svg className="h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    ) : cert.name}
                  </h3>
                  <p className="mb-3 font-medium text-indigo-600 dark:text-indigo-400">{cert.issuer}</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400 sm:justify-start">
                    <span><span className="font-medium text-slate-700 dark:text-slate-300">Issued:</span> {cert.issueDate}</span>
                    {cert.expiryDate && <span><span className="font-medium text-slate-700 dark:text-slate-300">Expires:</span> {cert.expiryDate}</span>}
                    {cert.credentialId && <span><span className="font-medium text-slate-700 dark:text-slate-300">ID:</span> {cert.credentialId}</span>}
                  </div>
                  {cert.description && <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{cert.description}</p>}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
