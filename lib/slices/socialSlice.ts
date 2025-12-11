import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SocialState {
  linkedin: string;
  github: string;
  twitter?: string;
}

const initialState: SocialState = {
  linkedin: 'https://www.linkedin.com/in/tommccleanuk',
  github: 'https://github.com/tommcclean',
  twitter: 'https://twitter.com',
};

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    updateSocial: (state, action: PayloadAction<Partial<SocialState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSocial } = socialSlice.actions;
export default socialSlice.reducer;

