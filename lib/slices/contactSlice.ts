import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactState {
  title: string;
  description: string;
}

const initialState: ContactState = {
  title: 'Let\'s Connect',
  description: 'Open to conversations about opportunities, collaboration or just talking tech.',
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

