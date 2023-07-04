import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Avatar, Button, CardActions, Grid, IconButton } from '@mui/material';
import useBlogCalls from '../hooks/useBlogCalls';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import UpdateModal from "../components/blog/UpdateModal";
import DeleteModal from '../components/blog/DeleteModal';


const Detail = () => {
  const { getBlogDataId } = useBlogCalls();
  // const { blogs } = useSelector(state => state.blog);
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const [info, setInfo] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    status: "",
    slug: "",
  });


  useEffect(() => {
    const fetchData = async () => {
      const response = await getBlogDataId(id);
      setBlogDetail(response);
    };
    fetchData();
  }, []);

  if (!blogDetail) {
    return <div>Loading...</div>;
  }


  return (
    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "76.5vh" }}>
      <Card sx={{
        width: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt: 3,
      }}>
        <CardMedia
          sx={{ height: 330, objectFit: "contain", mt: 1 }}
          component="img"
          image={blogDetail.image}
          alt="image"
        />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={blogDetail.author}
        // subheader={blogDetail.publish_date.substring(0, 10)}
        />

        <CardContent sx={{ height: 'auto', maxHeight: 430, overflowY: 'auto' }}>
          <Typography variant="body2" color="text.secondary">
            {blogDetail.content}
          </Typography>
        </CardContent>


        <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }} >
          <Grid>
            <IconButton aria-label="add to favorites" >
              <FavoriteIcon
              // color={isLiked ? "error" : "inherit"} 

              />
              <Typography variant="span" color="text.secondary">
                {blogDetail.likes}
              </Typography>
            </IconButton>
            <IconButton aria-label="share">
              <MessageIcon />
              <Typography variant="span" color="text.secondary">
                {1}
              </Typography>
            </IconButton>
            <IconButton aria-label="views">
              <RemoveRedEyeIcon />
              <Typography variant="span" color="text.secondary">
                {blogDetail.post_views}
              </Typography>
            </IconButton>
          </Grid>

          <Grid sx={{display:"flex"}} >
            <Button
              onClick={() => {
                const updatedInfo = { ...blogDetail };
                if (!updatedInfo.status) {
                  updatedInfo.status = ""; // Eğer status tanımlı değilse, boş bir dizeye ayarlayın
                }
                const validStatusValues = ["", "draft", "published"];
                if (!validStatusValues.includes(updatedInfo.status)) {
                  updatedInfo.status = ""; // Geçerli bir değer yoksa, boş bir değere ayarlayın
                }
                setInfo(updatedInfo);
                handleOpen();
              }}
              sx={{
                cursor: "pointer",
                bgcolor: "green",
                color: "white",
                padding: "3px 12px",
                "&:hover": { color: "black" },
              }} >
              UPDATE
            </Button>
            <DeleteModal open={openDelete} handleCloseDelete={handleCloseDelete} id={id} />
            <UpdateModal info={info} setInfo={setInfo} open={open} handleClose={handleClose} id={id} handleOpen={handleOpen} />
            <Button
              onClick={handleOpenDelete}
              sx={{
                cursor: "pointer",
                bgcolor: "red",
                color: "white",
                padding: "3px 12px",
                marginLeft: "1rem",
                "&:hover": { color: "black" },
              }} >
              DELETE
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Detail;
