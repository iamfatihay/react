// import {useDispatch, useSelector} from "react-redux";
// import { fetchFail, fetchStart, getSucces } from "../features/stockSlice";
// import axios from "axios";
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

const Firms = () => {
  // const dispatch = useDispatch();
  // const { token } = useSelector(state => state.auth);

  const {getStockData} = useStockCall()

  //? firms verileri bana birden fazla yerde lazım olduğu için fonksiyonu burada değil de her yerden erişebileceğim bir noktada tanımlıyorum. İçerisinde react hookları lazım olduğu için de bu ortak nokta en iyi custom hook olmuş oluyor.
  // const getFirms = async () => {
  //   const BASE_URL = process.env.REACT_APP_BASE_URL;

  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     console.log(data);
  //     const url = "firms";
  //     dispatch(getSucces({ data, url }));
  //     // dispatch(getSucces({ data, url:"firms"}))
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  useEffect(() => {
    getStockData("firms");
  }, []);

  return <div>Firms</div>;
}

export default Firms