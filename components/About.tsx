'use client';

export default function About() {
  return (
    <section id="about" className="border-t-2 border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          About Me
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              I'm a passionate developer who loves building beautiful and functional
              web applications. With expertise in modern web technologies, I create
              solutions that are both elegant and performant.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Node.js'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Management Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Team Leadership', 'Project Management', 'Agile Methodologies', 'Strategic Planning', 'Stakeholder Management'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

