import { createSlice } from "@reduxjs/toolkit";

const StockSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    error: false,
    brands:[],
    films:[],
    products:[],
    purchases:[],
    sales:[],
    categories:[],
   
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    // brandSuccess,
    // firmsSuccess,
    getSuccess: (state, {payload})=>{
        state.loading = false;
        state[payload.url]=payload.data;
    },

    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
 
  fetchFail,
} = StockSlice.actions;
export default StockSlice.reducer;

// async-thunk yerine manuel dispatclerle yapıyoruz. extra reducerlarla yapmadan da bu şekilde yapabiliyoruz. İki yönteminde avantajı ve dezavantajı var.