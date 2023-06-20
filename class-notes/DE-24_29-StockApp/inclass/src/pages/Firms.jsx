// import {useDispatch, useSelector} from "react-redux";
// import { fetchFail, fetchStart, getSucces } from "../features/stockSlice";
// import axios from "axios";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import Typography from "@mui/material/Typography"
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  // const dispatch = useDispatch();
  // const { token } = useSelector(state => state.auth);

  const { getStockData } = useStockCall();
  const {firms} = useSelector(state=> state.stock)
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    image: "",
    address: "",
  });

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
    // getFirms();
    getStockData("firms");
  }, []);

  return <div>
    <Typography variant="h4" color="error" mb={3}>
      Firms
    </Typography>
    <Button variant="contained" onClick={handleOpen}>New Firm</Button>
    <FirmModal open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>
    <Grid container sx={{
      display:"flex",
      justifyContent:"center",
      alignItems: "center",
      gap:2
    }}>
      { 
        firms?.map(firm =>(
          <Grid item key={firm.id}>
            <FirmCard firm={firm} handleOpen={handleOpen} setInfo={setInfo} />
          </Grid>
        ))
      }
    </Grid>
  </div>;
}

export default Firms