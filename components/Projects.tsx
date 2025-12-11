'use client';

import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import type { Project } from '@/lib/slices/projectsSlice';

export default function Projects() {
  const projectsState = useAppSelector((state) => state.projects);
  const projects: Project[] = projectsState.projects;

  return (
    <section id="projects" className="border-t-2 border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {projectsState.title}
        </h2>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
          {projectsState.description}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
          >
            {project.image && (
              <div className="relative h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

