import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavItem {
  label: string;
  id: string;
}

interface NavigationState {
  items: NavItem[];
}

const initialState: NavigationState = {
  items: [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Books', id: 'books' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ],
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    updateNavigation: (state, action: PayloadAction<Partial<NavigationState>>) => {
      return { ...state, ...action.payload };
    },
    updateNavItems: (state, action: PayloadAction<NavItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { updateNavigation, updateNavItems } = navigationSlice.actions;
export default navigationSlice.reducer;

