import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import About from "../pages/About";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/NewBlog";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route index element={<Dashboard />} /> 
          <Route path="" element={<Detail />} />
        </Route>
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="about" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;