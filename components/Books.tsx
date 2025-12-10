'use client';

import Image from 'next/image';

interface Book {
  title: string;
  author: string;
  description?: string;
  cover?: string;
  rating?: number; // Rating out of 5
}

export default function Books() {
  const books: Book[] = [
    {
      title: 'Surrounded by Idiots',
      author: 'Thomas Erikson',
      description: 'A practical guide to understanding different personality types and improving communication.',
      cover: '/images/surrounded-by-idiots.jpg',
      rating: 4,
    },
  ];

  return (
    <section id="books" className="border-t-2 border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Favourite Books
        </h2>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
          A collection of books that have inspired and influenced my thinking.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              {book.cover && (
                <div className="relative h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={book.cover}
                    alt={`${book.title} by ${book.author} cover`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {book.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  by {book.author}
                </p>
                {book.rating !== undefined && (
                  <div className="mb-3 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < book.rating!
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-zinc-300 text-zinc-300 dark:fill-zinc-700 dark:text-zinc-700'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {book.rating}/5
                    </span>
                  </div>
                )}
                {book.description && (
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {book.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

