'use client';

import { useAppSelector } from '@/lib/hooks';

export default function About() {
  const about = useAppSelector((state) => state.about);

  return (
    <section id="about" className="border-t-2 border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {about.title}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {about.hobbies.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {about.hobbies.description}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {about.managementSkills.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.managementSkills.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {about.technicalSkills.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.technicalSkills.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

