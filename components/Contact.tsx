'use client';

import { useAppSelector } from '@/lib/hooks';

export default function Contact() {
  const contact = useAppSelector((state) => state.contact);
  const social = useAppSelector((state) => state.social);

  return (
    <section id="contact" className="border-t-2 border-zinc-300 bg-white dark:border-zinc-700 dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {contact.title}
        </h2>
        <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-400">
          Reach out via LinkedIn to learn more about me or to collaborate on a project.
        </p>
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-zinc-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
          <p className="mb-4 text-base">
            I’d love to connect — send me a message on LinkedIn.
          </p>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

