import { createSlice } from "@reduxjs/toolkit";

const filtersReducer = createSlice({
  name: 'filters',
  initialState: {
    recommendFilter: {
      bookTitle: '',
      author: '',
    },
  },
  reducers: {
    filterRecommend(state, action) {
      state.recommendFilter = action.payload;
    }
  }
});

export const { filterRecommend } = filtersReducer.actions;
export default filtersReducer.reducer;
