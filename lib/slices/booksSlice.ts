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
  description: 'Since becoming a Technology Manager I have been search for the best to help me grow and expand my knowledge.',
  books: [
    {
      title: 'Surrounded by Idiots',
      author: 'Thomas Erikson',
      description: 'A practical guide to understanding different personality types and improving communication.',
      cover: '/images/surrounded-by-idiots.jpg',
      logo: '/images/surrounded-by-idiots.png',
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

