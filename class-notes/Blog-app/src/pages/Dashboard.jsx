import React from 'react';
import useBlogCalls from "../hooks/useBlogCalls";

const Dashboard = () => {
    const { getBlogData } = useBlogCalls();



  return (
    <div>Dashboard</div>
  )
}

export default Dashboard