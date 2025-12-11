'use client';

import { useAppSelector } from '@/lib/hooks';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footer = useAppSelector((state) => state.footer);

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {currentYear} {footer.copyrightText}
          </p>
          <div className="flex gap-6">
            <a
              href={footer.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              GitHub
            </a>
            <a
              href={footer.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              LinkedIn
            </a>
            {footer.socialLinks.twitter && (
              <a
                href={footer.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

