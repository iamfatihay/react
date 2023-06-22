import React from 'react';
import useStockCall from '../../hooks/useStockCall';
import { Box, Button, Modal, TextField } from '@mui/material';



const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};


const BrandModal = ({ open, handleClose, info, setInfo }) => {

    const { postStockData, putStockData } = useStockCall();
    const handleChange = e => {
        // console.log(e.target)
        // console.log(e.target.name)
        // console.log(e.target.value)
        setInfo({ ...info, [e.target.name]: e.target.value }); //! inputların name attributelarındaki isimler ile info statetimin içindeki keyler aynı olduğu için bu şekilde tek bir fonksiyonla inputdaki verilerimi state e aktarabildim.
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (info.id) {
            putStockData("brands", info); //! update işleminde info dolu geldiği için içerisinde id bilgiside yer alıyor. Biz bu id üzerinden sorgulama yaparak id varsa yapacağın işlem put işlemi id yoksa yapacağın işlem post işlemi diye belirtmiş olduk.
        } else {
            postStockData("brands", info);
        }

        // setInfo({
        //   name: "",
        //   phone: "",
        //   image: "",
        //   address: "",
        // });
        handleClose(); //? submit işleminden sonra modalın kapanması için burada handleClose fonksiyonunu çağırıyoruz.
    };
    console.log(info);

    return (
        <div>
            <Modal
                open={open}
                onClose={() => {
                    handleClose();
                    // setInfo({
                    //   name: "",
                    //   phone: "",
                    //   image: "",
                    //   address: "",
                    // });
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Box
                        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                        component={"form"}
                        onSubmit={handleSubmit}>
                        <TextField
                            label="Brand Name"
                            name="name"
                            id="name"
                            type="text"
                            variant="outlined"
                            value={info.name}
                            onChange={handleChange}
                            required
                        />

                        <TextField
                            label="Image"
                            name="image"
                            id="image"
                            type="url"
                            variant="outlined"
                            value={info.image}
                            onChange={handleChange}
                            required
                        />
                        <Button variant="contained" type="submit">
                            {info.id ? "Update Brand" : "Submit Brand"}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default BrandModal