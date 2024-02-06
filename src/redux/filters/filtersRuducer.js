import { createSlice } from "@reduxjs/toolkit";

const filtersReducer = createSlice({
  name: 'filters',
  initialState: {
    recommendFilter: {
      bookTitle: '',
      author: '',
    },
    readFilter: '',
  },
  reducers: {
    filterRecommend(state, action) {
      state.recommendFilter = action.payload;
    },
    setReadFilter(state, action) {
      state.readFilter = action.payload;
    }
  }
});

export const { filterRecommend, setReadFilter } = filtersReducer.actions;
export default filtersReducer.reducer;
