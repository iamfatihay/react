import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const { token } = useSelector(state => state.auth);
  const { id } = useParams();
  // const { id } = useSelector(state => state.blog);
  const [blogDetail, setBlogDetail] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const blogDetailBaseUrl = `${BASE_URL}api/blogs/${id}`;

  useEffect(() => {
    axios.get(blogDetailBaseUrl, {
      headers: {
        Authorization: `Token ${token}`,
        // Diğer başlık bilgilerini buraya ekleyebilirsiniz
      }
    }).then((res) => setBlogDetail(res.data)).catch((err) => console.log(err));
  }, []);

  // const truncatedContent = blog.content.length > 180 ? `${blog.content.substring(0, 180)}...` : blog.content;
  const publishDate = blogDetail && blogDetail.publish_date;
  const formattedDate = publishDate ? `${publishDate.substring(0, 10)}, ${publishDate.slice(11, 19)}` : "";
  console.log(blogDetail);
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card sx={{
        width: "500px",
        // height: "420px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt:3,
      }}>
        <CardMedia
          sx={{ height: 330, objectFit: "contain", mt:1 }}
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
          subheader={formattedDate}
        />

        <CardContent sx={{ height: 'auto', maxHeight: 430, overflowY: 'scroll' }} >
          <Typography variant="body2" color="text.secondary">
            {blogDetail.content}
          </Typography>
        </CardContent>

        <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }} >
          <Grid>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <MessageIcon />
            </IconButton>
            <IconButton aria-label="views">
              <RemoveRedEyeIcon />
            </IconButton>
          </Grid>

          <Grid>
            <Button sx={{
              cursor: "pointer",
              bgcolor: "#dce775",
              "&:hover": { color: "black" },
            }} >
              READ MORE
            </Button>
          </Grid>


        </CardActions>
      </Card>
    </Grid>
  )
}

export default Detail