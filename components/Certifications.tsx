'use client';

import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import type { Certification } from '@/lib/slices/certificationsSlice';

export default function Certifications() {
  const certificationsState = useAppSelector((state) => state.certifications);
  const certifications: Certification[] = certificationsState.certifications;

  return (
    <section id="certifications" className="border-t-2 border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {certificationsState.title}
        </h2>
        {certificationsState.description && (
          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
            {certificationsState.description}
          </p>
        )}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                {cert.logo && (
                  <div className="flex-shrink-0">
                    <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                      <Image
                        src={cert.logo}
                        alt={`${cert.name} logo`}
                        width={72}
                        height={72}
                        className="h-full w-full rounded-lg object-contain"
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                      >
                        {cert.name}
                      </a>
                    ) : (
                      cert.name
                    )}
                  </h3>
                  <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
                    {cert.issuer}
                  </p>
                  <div className="mb-4 flex flex-wrap justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 sm:justify-start">
                    <div>
                      <span className="font-medium">Issued:</span> {cert.issueDate}
                    </div>
                    {cert.expiryDate && (
                      <div>
                        <span className="font-medium">Expires:</span> {cert.expiryDate}
                      </div>
                    )}
                    {cert.credentialId && (
                      <div>
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </div>
                    )}
                  </div>
                  {cert.description && (
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

