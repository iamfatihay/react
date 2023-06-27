import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { Grid } from '@mui/material';
import Card from '../components/blog/Card';

const Dashboard = () => {
    const { getBlogData } = useBlogCalls();
    const { blogs } = useSelector(state => state.blog);


    useEffect(() => {
        getBlogData("blogs");
        console.log(blogs);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  return (
    <div>
      <Grid container sx={{display:"flex"}}>
        {blogs?.map(blog => (
          <Grid item key={blog.id}>
            <Card blog={blog} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Dashboard