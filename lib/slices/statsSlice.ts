import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Stat {
  value: string;
  label: string;
}

interface StatsState {
  stats: Stat[];
}

const initialState: StatsState = {
  stats: [
    { value: '15+', label: 'Years in Tech' },
    { value: '10+', label: 'Projects Shipped' },
    { value: 'BSc', label: 'Computer Science' },
    { value: 'Bristol', label: 'Based in UK' },
  ],
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    updateStats: (state, action: PayloadAction<Stat[]>) => {
      state.stats = action.payload;
    },
  },
});

export const { updateStats } = statsSlice.actions;
export default statsSlice.reducer;
