import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const getRecommendBooks = createAsyncThunk(
  'books/getRecommendBooks',
  async (data, thunkAPI) => {
    try {
      if (data.windowsize < 768) {
        const response = await axios.get(
          `/books/recommend?page=${data.page}&limit=2`
        );
        return response.data;
      } else if (data.windowsize >= 768 && data.windowsize < 1280) {
        const response = await axios.get(
          `/books/recommend?page=${data.page}&limit=8`
        );
        return response.data;
      } else if (data.windowsize >= 1280) {
        const response = await axios.get(
          `/books/recommend?page=${data.page}&limit=10`
        );
        return response.data;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getLibraryRecommendBook = createAsyncThunk(
  'books/getLibraryRecommendBook',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/books/recommend?page=1&limit=3');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addBookFromRecommend = createAsyncThunk(
  'books/addBookFromRecommend',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/books/add/${id}`);
      toast.success('Book success added to library', { theme: 'dark' });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getUserBooks = createAsyncThunk(
  'books/getUserBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/books/own');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);}
  }
);

export const deleteUserBook = createAsyncThunk(
  'books/deleteUserBook',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/books/remove/${id}`);
      toast.success(response.data.message, { theme: "dark" });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
