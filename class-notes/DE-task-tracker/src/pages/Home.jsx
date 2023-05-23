import { useState, useEffect } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import Data from "../helper/Data";

const Home = () => {

  

  return (
    <div>
      <GorevEkle  />

      <GorevleriGoster  />
    </div>
  );
};

export default Home;
