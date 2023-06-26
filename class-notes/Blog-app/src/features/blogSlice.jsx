import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    loading: false,
    error: false,
    brands: [],
    blogs: [],
    products: [],
    purchases: [],
    sales: [],
    categories: [],
    //! statelerimizin isimleri ile endpointlerimizin isimlerini aynı verdik. Bunun sebebi tek bir reducerla tüm stateleri dinamik bir şekilde doldurabilelim.
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    // brandsSuccess,
    // blogsSuccess,
    getSucces: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.data; // state["blogs"], state["brands"] anlamlarına gelerek tek bir reducerla tüm stateleri doldurabilmiş olduk.
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSucces,
  fetchFail,
} = blogSlice.actions;
export default blogSlice.reducer;

// async-thunk yerine manuel dispatclerle yapıyoruz. extra reducerlarla yapmadan da bu şekilde yapabiliyoruz. İki yönteminde avantajı ve dezavantajı var.
