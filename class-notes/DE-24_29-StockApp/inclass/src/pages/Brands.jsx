import { Button, Grid, Typography } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/modal/BrandModal";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands } = useSelector(state => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      "name": "",
      "image": ""
    });
    //* handleClose olduğunda yani modal kapnadığında formdaki verilerin temizlenmesi için burada tanımladık.
  };

  const [info, setInfo] = useState({
    "name": "",
    "image": ""
  });

  useEffect(() => {
    // getBrands();
    getStockData("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Brand
      </Button>
      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
        {brands?.map(brand => (
          <Grid item key={brand.id}>
            <BrandCard brand={brand} handleOpen={handleOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Brands
