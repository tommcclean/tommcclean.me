import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FooterState {
  copyrightText: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

const initialState: FooterState = {
  copyrightText: 'Personal Website. All rights reserved.',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com', // Optional - can be removed to hide Twitter link
  },
};

const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
    updateFooter: (state, action: PayloadAction<Partial<FooterState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFooter } = footerSlice.actions;
export default footerSlice.reducer;

