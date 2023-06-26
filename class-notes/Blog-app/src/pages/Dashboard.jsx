import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";

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

    </div>
  )
}

export default Dashboard