import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  title: string;
  bio: string;
  location: string;
  profilePicture?: string;
}

const initialState: UserState = {
  name: 'Thomas William McClean',
  title: 'Technology Manager and Software Engineer',
  bio: 'Technology Manager for Web Foundations at Just Eat Takeaway',
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

