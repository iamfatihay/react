import React from "react"
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";  //! bu satir bir kaliptir, her kullanimda bu lazim
import Footer from "./components/Footer";
import dataa from "./data";
import CourseCard from "./components/CourseCard";

function App() {
  return (
    <div >
      <MyNavbar/>

      <CourseCard data={dataa} />

      <Footer/>
    </div>
  );
}

export default App;
