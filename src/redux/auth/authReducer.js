import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: true,
    isRefreshing: false,
    authError: null,
  }
});

export const authReducer = AuthSlice.reducer;

