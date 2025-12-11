import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Book {
  title: string;
  author: string;
  description?: string;
  cover?: string;
  logo?: string; // Publisher or author logo
  rating?: number; // Rating out of 5
}

interface BooksState {
  title: string;
  description: string;
  books: Book[];
}

const initialState: BooksState = {
  title: 'Favourite Books',
  description: 'A collection of books that have inspired and influenced my thinking.',
  books: [
    {
      title: 'Surrounded by Idiots',
      author: 'Thomas Erikson',
      description: 'A practical guide to understanding different personality types and improving communication.',
      cover: '/images/surrounded-by-idiots.jpg',
      logo: '/images/surrounded-by-idiots.png', // Add your logo image to public/images/
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

