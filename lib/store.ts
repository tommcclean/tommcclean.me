import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import socialReducer from './slices/socialSlice';
import aboutReducer from './slices/aboutSlice';
import experienceReducer from './slices/experienceSlice';
import projectsReducer from './slices/projectsSlice';
import booksReducer from './slices/booksSlice';
import contactReducer from './slices/contactSlice';
import navigationReducer from './slices/navigationSlice';
import certificationsReducer from './slices/certificationsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      social: socialReducer,
      about: aboutReducer,
      experience: experienceReducer,
      projects: projectsReducer,
      books: booksReducer,
      contact: contactReducer,
      navigation: navigationReducer,
      certifications: certificationsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

