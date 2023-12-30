import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './authOperation';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: '',
    email: '',
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    authError: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.authError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.authError = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = null;
  })
});

export const authReducer = AuthSlice.reducer;
