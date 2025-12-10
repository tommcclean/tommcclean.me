import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
}

const initialState: UserState = {
  name: 'Thomas William McClean',
  title: 'Technology Manager and Software Engineer',
  bio: 'Technology Manager and Software Engineer working at Just Eat Takeaway.',
  email: 'contact@tommcclean.me',
  location: 'Bristol, UK',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;

