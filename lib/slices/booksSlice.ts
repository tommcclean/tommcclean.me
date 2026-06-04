import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Book {
  title: string;
  author: string;
  description?: string;
  cover?: string;
      logo?: string;
      rating?: number;
}

interface BooksState {
  title: string;
  description: string;
  books: Book[];
}

const initialState: BooksState = {
  title: 'Favourite Books',
  description: 'Books that have shaped how I think about leadership, people and building teams. Recommended reading for anyone who manages others.',
  books: [
    {
      title: 'Surrounded by Idiots',
      author: 'Thomas Erikson',
      description: 'A practical guide to understanding different personality types and improving communication.',
      cover: '/images/surrounded-by-idiots.jpg',
      logo: '/images/surrounded-by-idiots.png',
      rating: 5,
    },
    {
      title: 'The First 90 Days',
      author: 'Michael D. Watkins',
      description: 'Proven strategies for getting up to speed faster and smarter in a new leadership role. The definitive guide to accelerating your transition.',
      cover: '/images/first-90-days.webp',
      rating: 4,
    },
    {
      title: "The Manager's Path",
      author: 'Camille Fournier',
      description: 'A guide for tech leaders navigating growth and change, from mentoring to managing managers.',
      cover: '/images/managers-path.jpg',
      rating: 4,
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    updateBooks: (state, action: PayloadAction<Partial<BooksState>>) => {
      return { ...state, ...action.payload };
    },
    updateBooksList: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<number>) => {
      state.books.splice(action.payload, 1);
    },
  },
});

export const { updateBooks, updateBooksList, addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

