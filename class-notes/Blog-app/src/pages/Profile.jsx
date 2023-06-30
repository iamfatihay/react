import React from 'react';
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import logo from "../assets/logo1.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Profile = () => {
    const currentUser = useSelector(state => state.auth.currentUser);
    const image = useSelector(state => state.auth.image);
    const firstName = useSelector(state => state.auth.first_name);
    const email = useSelector(state => state.auth.email);
    const bio = useSelector(state => state.auth.bio);

  return (
    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
      <Card sx={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>

        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          image={image}
          alt="image"
        />
        <CardContent sx={{ textAlign: "center" }} >
          <Typography variant="h2" color="text.primary">
          {currentUser}
          </Typography>
          <Typography variant="h4" color="text.primary">
          {firstName}
          </Typography>
          <Typography variant="p" color="text.primary">
          {bio}
          </Typography>
        </CardContent>

        {/* <CardActions disableSpacing sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
          <Grid >
            <IconButton aria-label="linkedIn" >
              <LinkedInIcon color='secondary' fontSize='large' />
            </IconButton>
            <IconButton aria-label="GitHub">
              <GitHubIcon color='secondary' fontSize='large' />
            </IconButton>

          </Grid>
        </CardActions> */}
      </Card>
    </Grid>
    // <div>
    //   <h2>{currentUser}</h2>
      
    //   <img src={image} alt="User Image" />
    //   <p>First Name: {firstName}</p>
    //   <p>Email: {email}</p>
    //   <p>Bio: {bio}</p>
   
    // </div>
  )
}

export default Profile