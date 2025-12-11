import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactState {
  title: string;
  description: string;
}

const initialState: ContactState = {
  title: 'Contact Me',
  description: 'Reach out via LinkedIn to learn more about me or to collaborate on a project.',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateContact: (state, action: PayloadAction<Partial<ContactState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateContact } = contactSlice.actions;
export default contactSlice.reducer;

