'use client';

import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import FadeIn from '@/components/FadeIn';
import type { Book } from '@/lib/slices/booksSlice';

function isExternalUrl(src: string) {
  return src.startsWith('http://') || src.startsWith('https://');
}

export default function Books() {
  const booksState = useAppSelector((state) => state.books);
  const books: Book[] = booksState.books;

  return (
    <section id="books" className="relative overflow-hidden bg-white dark:bg-slate-950 py-24">
      <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-amber-50 dark:bg-amber-900/20 blur-3xl opacity-80" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-indigo-50 dark:bg-indigo-900/20 blur-3xl opacity-80" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative mb-12">
            <span className="pointer-events-none absolute -top-6 left-0 select-none text-[90px] font-black leading-none text-slate-900/[0.04] dark:text-white/[0.05]">04</span>
            <div className="relative">
              <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-slate-50">{booksState.title}</h2>
              <div className="h-1 w-12 rounded-full bg-indigo-600" />
              <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">{booksState.description}</p>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book, index) => (
            <FadeIn key={index} delay={index * 80}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]">
                {book.cover && (
                  <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                    {isExternalUrl(book.cover) ? (
                      <img src={book.cover} alt={`${book.title} cover`}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.src = '/images/coming-soon.webp'; }} />
                    ) : (
                      <Image src={book.cover} alt={`${book.title} cover`} fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    )}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-1 text-base font-bold text-slate-900 dark:text-slate-50">{book.title}</h3>
                  <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">by {book.author}</p>
                  {book.rating !== undefined && (
                    <div className="mb-3 flex items-center gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`h-4 w-4 ${i < book.rating! ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 dark:fill-slate-600 text-slate-200 dark:text-slate-600'}`} viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                      <span className="text-xs text-slate-500 dark:text-slate-400">{book.rating}/5</span>
                    </div>
                  )}
                  {book.description && <p className="flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{book.description}</p>}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
