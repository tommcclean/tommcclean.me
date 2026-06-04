'use client';

import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
  const contact = useAppSelector((state) => state.contact);
  const social = useAppSelector((state) => state.social);
  const user = useAppSelector((state) => state.user);

  return (
    <section id="contact" className="bg-gradient-to-br from-indigo-600 to-violet-700 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            {user.profilePicture && (
              <div className="mb-8">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white/30 shadow-2xl">
                  <Image
                    src={user.profilePicture}
                    alt={`${user.name} profile picture`}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
              </div>
            )}

            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">{contact.title}</h2>
            <p className="mb-2 text-lg font-medium text-indigo-200">{user.title}</p>
            <p className="mb-10 max-w-lg text-indigo-100">
              LinkedIn is the best place to reach me. Whether it is about a role, a project or just a conversation about tech, I am always happy to chat.
            </p>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
