import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    authError: null,
  }
});

export const authReducer = AuthSlice.reducer;

