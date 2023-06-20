import React from 'react';
import { Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import useStockCall from '../hooks/useStockCall';

const BrandCard = ({ brand, handleOpen, setInfo }) => {
    const { deleteStockData } = useStockCall();
  return (
    <Card
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {brand?.address}
        </Typography>
      </CardContent> */}
      <CardHeader 
      title={brand?.name}
    //   subheader={brand?.name}
       />
      <CardMedia
        component="img"
        sx={{ height: 130, objectFit: "contain" }}
        image={brand?.image}
        title={brand?.name}
        alt={brand?.name}
      />
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          Phone: {brand?.phone}
        </Typography>
      </CardContent> */}

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
        <EditIcon
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          onClick={() => {
            setInfo(brand); //! icona tıklanıldığında ınfo stateinin tıklanılan brandinin verileri ile dolması için statei burada güncelliyoruz.
            handleOpen(); //! icona tıklanıldığında modalın açılmasını sağlıyoruz.
          }}
        />
        <DeleteOutlineIcon
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          onClick={() => deleteStockData("brands", brand.id)}
        />
      </CardActions>
    </Card>
  )
}

export default BrandCard