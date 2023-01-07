import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Title: '',
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.Title = action.payload;
    },
  },
});

export const { setTitle } = navbarSlice.actions;

export default navbarSlice.reducer;
