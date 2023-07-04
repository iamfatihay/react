// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
// import BlogCard from "../components/blog/BlogCard";
// import { Container, Grid } from "@mui/material";
// import useAxios from "../hooks/useAxios";
// import { useSelector } from "react-redux";
// // import { Helmet } from "react-helmet";

// const MyBlogs = () => {
// //   const { state } = useAuthContext();
//   const { currentUser } = useSelector(state => state.auth)
//   const [myData, setMyData] = useState([]);
//   const {axiosWithToken} = useAxios();

//   const getUserBlog = async () => {
//     const { data } = await axiosWithToken.get(`api/blogs/?author=${currentUser}`);
//     setMyData(data)
//     console.log(currentUser);
//   };

//   useEffect(() => {
//     getUserBlog();
//   }, [currentUser]);

//   return (
//     <>
//     {/* <Helmet>
//         <title>BlogApp - User Blogs</title>
//       </Helmet> */}
//     <Container sx={{ minHeight: "90vh" }}>
//       <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       spacing={2}
//       >
//         {myData?.map((item) => (
//           <BlogCard key={item.id} item={item} />
//         ))}
//       </Grid>
//     </Container>
//     </>
//   );
// };

// export default MyBlogs;







/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import BlogCard from "../components/blog/BlogCard";
import { Container, Grid } from "@mui/material";
import useAxios from "../hooks/useAxios";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";

const MyBlogs = () => {
    const { blogs } = useSelector(state => state.blog);
    const { getBlogData } = useBlogCalls();
    const { currentUser } = useSelector(state => state.auth);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {
        getBlogData("blogs");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (blogs && currentUser) {
            const filtered = blogs.filter(blog => blog.author === currentUser);
            setFilteredBlogs(filtered);
        }
    }, [blogs, currentUser]);

    return (
        <>
            <Container sx={{ minHeight: "90vh" }}>
                <Grid container sx={{display:"flex", justifyContent:"center", gap:4, mt:3}}
                >
                    {filteredBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default MyBlogs;