import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { Formik } from "formik";
import image from "../assets/register_img.svg";
import Grid from "@mui/material/Grid";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import PostAddIcon from '@mui/icons-material/PostAdd';
import { flex } from "../styles/globalStyle";
import NewBlogForm, { blogSchema } from "../components/blog/NewBlogForm";
import useBlogCalls from "../hooks/useBlogCalls";

const NewBlog = () => {
    const { postBlogData } = useBlogCalls();

    return (
        <Grid sx={{
            backgroundImage: "url(https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.8,
            // filter: "blur(2px)",
            height: "87.5vh",
        }}>
            <Grid container sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                p: 1,
                m: "auto",
                width: "500px",
                backgroundColor:"#fafafa",
                borderRadius:"10px",              
            }}>
                <Avatar
                    sx={{
                        backgroundColor: "black",
                        m: "auto",
                        width: 40,
                        height: 40,
                        mt:2,
                    }}>
                    <PostAddIcon size="10" />
                </Avatar>
                <Typography
                    variant="h4"
                    align="center"
                    color="black"
                    sx={{mb:3}}>
                    New Blog
                </Typography>

                <Formik
                    initialValues={{
                        title: "",
                        content: "",
                        image: "",
                        category: "",
                        status: "",
                    }}
                    validationSchema={blogSchema}
                    onSubmit={(values, actions) => {
                        //! submit islemi oldugunda yapilacaklari buraya yaziyoruz.
                        postBlogData("blogs",values);
                        console.log(values);
                        actions.resetForm();

                    }}
                    component={props => <NewBlogForm {...props} />}>
                </Formik>
            </Grid>
        </Grid>
    )
}

export default NewBlog