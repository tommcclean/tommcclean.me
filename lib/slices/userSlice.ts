import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  title: string;
  bio: string;
  location: string;
  profilePicture?: string;
  companyName?: string;
}

const initialState: UserState = {
  name: 'Thomas William McClean',
  title: 'Technology Manager and Software Engineer',
  bio: 'Engineering manager at Just Eat Takeaway with a passion for building great teams and great software. I lead engineers by day and ship side projects by night.',
  location: 'Bristol, UK',
  profilePicture: '/images/avatar.jpg',
  companyName: 'Just Eat Takeaway',
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

