import * as React from 'react';
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
import AccountCircle from "@mui/icons-material/AccountCircle";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function BlogCard({ blog }) {
    const { content, title, publish_date, image, likes, id, post_views } = blog;
    const navigate = useNavigate();
    const truncatedContent = content.length > 180 ? `${blog.content.substring(0, 180)}...` : blog.content;

    const handleMore = (id) => {
        navigate(`/detail/${id}`);
    }

    return (
        <Card sx={{
            width: "400px",
            height: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.3)',
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={title}
                subheader={publish_date.substring(0, 10)}
            />
            <CardMedia
                sx={{ height: 130, objectFit: "contain" }}
                component="img"
                image={image}
                alt="image"
            />
            <CardContent sx={{ height: 130 }} >
                <Typography variant="body2" color="text.secondary">
                    {truncatedContent}
                </Typography>
            </CardContent>
            <Grid sx={{ display: "flex", ml:2 }}>
                <AccountCircle />
                <span>{blog.author ?? "No author"}</span>
            </Grid>


            <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }} >
                <Grid>
                    <IconButton aria-label="add to favorites" >
                        <FavoriteIcon
                        // color={isLiked ? "error" : "inherit"} 

                        />
                        <Typography variant="span" color="text.secondary">
                            {likes}
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
                            {post_views}
                        </Typography>
                    </IconButton>
                </Grid>

                <Grid>
                    <Button onClick={() => handleMore(id)} sx={{
                        cursor: "pointer",
                        bgcolor: "#dce775",
                        "&:hover": { color: "black" },
                    }} >
                        READ MORE
                    </Button>
                </Grid>


            </CardActions>
        </Card>
    );
}