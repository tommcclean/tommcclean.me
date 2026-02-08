'use client';

import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';

export default function Contact() {
  const contact = useAppSelector((state) => state.contact);
  const social = useAppSelector((state) => state.social);
  const user = useAppSelector((state) => state.user);

  return (
    <section id="contact" className="border-t border-zinc-200/80 bg-white/60 py-20 backdrop-blur-xl dark:border-zinc-700/80 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {contact.title}
        </h2>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          Reach out via LinkedIn to learn more about me or to collaborate on a project.
        </p>
        
        <div className="overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)] backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Profile Picture Section */}
            <div className="relative flex items-center justify-center border-r border-zinc-200/40 bg-white/30 p-12 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 md:p-16">
              {user.profilePicture ? (
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] dark:border-white/20">
                  <Image
                    src={user.profilePicture}
                    alt={`${user.name} profile picture`}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
              ) : (
                <div className="flex h-64 w-64 items-center justify-center rounded-full border-4 border-white/40 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 text-6xl font-bold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] dark:border-white/20">
                  {user.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()}
                </div>
              )}
            </div>

            {/* Contact Content Section */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {user.name}
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  {user.title}
                </p>
              </div>
              
              <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                I'd love to connect and discuss opportunities, collaborations, or just have a chat about technology and innovation.
              </p>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#0077b5]/30 bg-[#0077b5]/90 px-6 py-4 text-base font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] backdrop-blur-sm transition-all hover:bg-[#0077b5] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_4px_12px_rgba(0,119,181,0.3)] focus:outline-none focus:ring-2 focus:ring-[#0077b5] focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

