import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSucces } from "../features/stockSlice";
import axios from "axios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

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
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}stock/${url}/`, {
        headers: { Authorization: `Token ${token}` },
      });
      console.log(data);
      dispatch(getSucces({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getStockData };
};

export default useStockCall;