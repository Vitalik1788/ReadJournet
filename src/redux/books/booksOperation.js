import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';


export const getRecommendBooks = createAsyncThunk(
  'books/getRecommendBooks',
  async ( credentials, thunkAPI) => {
    try {
      const response = await axios.get(`/books/recommend?page=${credentials.page}&limit=${credentials.pageLimit}`);
      return response.data.results;
      
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);