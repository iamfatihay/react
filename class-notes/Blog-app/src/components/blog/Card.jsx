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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Button, Grid } from '@mui/material';
import { btnStyle } from '../../styles/globalStyle';


export default function BlogCard({ blog }) {
    const truncatedContent = blog.content.length > 180 ? `${blog.content.substring(0, 180)}...` : blog.content;


    return (
        <Card sx={{
            width: "300px",
            height: "420px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={blog.title}
                subheader={blog.publish_date.substring(0, 10)}
            />
            <CardMedia
                sx={{ height: 130, objectFit: "contain" }}
                component="img"
                image={blog.image}
                alt="image"
            />
            <CardContent sx={{ height: 130 }} >
                <Typography variant="body2" color="text.secondary">
                    {truncatedContent}
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
    );
}