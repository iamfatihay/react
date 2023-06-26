import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getProCatBrandSucces,
  getProPurcFirBrandsSucces,
  getProSalBrandsSucces,
  getPurcSalesSucces,
  getSucces,
} from "../features/blogSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  const { axiosWithToken } = useAxios();

  //   const getFirms = async () => {
  //     const BASE_URL = process.env.REACT_APP_BASE_URL;

  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //         headers: { Authorization: `Token ${token}` },
  //       });
  //       console.log(data);
  //       const url = "firms";
  //       dispatch(getSucces({ data, url }));
  //       // dispatch(getSucces({ data, url:"firms"}))
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };
  //   const getBrands = async () => {
  //     const BASE_URL = process.env.REACT_APP_BASE_URL;

  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}stock/brands/`, {
  //         headers: { Authorization: `Token ${token}` },
  //       });
  //       console.log(data);
  //       const url = "brands";
  //       dispatch(getSucces({ data, url }));
  //       // dispatch(getSucces({ data, url:"brands"}))
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };
  //! yukarıdaki gib her seferinde yazmak yerine daha modüler bir yapı kurarak tek bir fonksiyonla bir den fazla get işlemini gerçekleştirebiliyoruz
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  // const getBlogData = async (url) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/${url}/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     console.log(data);
  //     dispatch(getSucces({ data, url }));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  // const deleteBlogData = async (url,id) => {
  //   dispatch(fetchStart());
  //   try {
  //      await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     getBlogData(url);
  //     toastSuccessNotify(`${url} successfuly deleted!`)
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(`${url} not successfuly deleted!`);

  //   }
  // };
  //! istek atarken ortak olan base_url  ve token gibi değerleri her seferinde yazmak yerine axios instance kullanarak bunları orada tanımlıyoruz. Ve sonrasında sadece istek atmak istediğimiz end pointi yazmamız yeterli oluyor.

  
  const getBlogData = async url => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/${url}/`);
      console.log(data);
      dispatch(getSucces({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteBlogData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`api/${url}/${id}/`);
      getBlogData(url);
      toastSuccessNotify(`${url} successfuly deleted!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} not successfuly deleted!`);
    }
  };

  const postBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/`, info);
      getBlogData(url);
      toastSuccessNotify(`${url} successfuly created!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} not successfuly created!`);
    }
  };
  const putBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`api/${url}/${info.id}/`, info);
      getBlogData(url);
      toastSuccessNotify(`${url} successfuly updated!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} not successfuly updated!`);
    }
  };

//   const getProCatBrand = async () => {
//     dispatch(fetchStart());
//     try {
//       // const { data } = await axiosWithToken.get(`blog/${url}/`);
//       const [products, brands, categories] = await Promise.all([
//         axiosWithToken.get(`blog/products/`),
//         axiosWithToken.get(`blog/brands/`),
//         axiosWithToken.get(`blog/categories/`),
//       ]);

//       dispatch(
//         getProCatBrandSucces([products?.data, brands?.data, categories?.data])
//       );
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };
//   const getProSalBrands = async () => {
//     dispatch(fetchStart());
//     try {
//       // const { data } = await axiosWithToken.get(`blog/${url}/`);
//       const [products, brands, sales] = await Promise.all([
//         axiosWithToken.get(`blog/products/`),
//         axiosWithToken.get(`blog/brands/`),
//         axiosWithToken.get(`blog/sales/`),
//       ]);

//       dispatch(
//         getProSalBrandsSucces([products?.data, brands?.data, sales?.data])
//       );
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };
//   const getProPurcFirBrands = async () => {
//     dispatch(fetchStart());
//     try {
//       // const { data } = await axiosWithToken.get(`blog/${url}/`);
//       const [products, purchases,firms,brands] = await Promise.all([
//         axiosWithToken.get(`blog/products/`),
//         axiosWithToken.get(`blog/purchases/`),
//         axiosWithToken.get(`blog/firms/`),
//         axiosWithToken.get(`stock/brands/`),
//       ]);

//       dispatch(
//         getProPurcFirBrandsSucces([
//           products?.data,
//           purchases?.data,
//           firms?.data,
//           brands?.data,
//         ])
//       );
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };
//   const getPurcSales = async () => {
//     dispatch(fetchStart());
//     try {
//       const [purchases, sales] = await Promise.all([
//         axiosWithToken.get(`stock/purchases/`),
//         axiosWithToken.get(`stock/sales/`),
//       ]);

//       dispatch(getPurcSalesSucces([purchases?.data, sales?.data]));
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };

  return {
    getBlogData,
    deleteBlogData,
    postBlogData,
    putBlogData,
    // getProCatBrand,
    // getProSalBrands,
    // getProPurcFirBrands,
    // getPurcSales,
  };
  
};

export default useBlogCalls;
