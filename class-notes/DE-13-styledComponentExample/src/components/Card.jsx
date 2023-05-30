import React from "react";
import data from "../data";
import ImageSSS from "./styles/ImageSSS";
import KartSSS from "./styles/KartSSS";

const Card = () => {


  return (
    <div>
      {data.map((item) => (
        <KartSSS key={item.id} ters={item.id%2===1 && "row-reverse"} >
          <div>
            <h2>{item.title} </h2>
            <p>{item.body} </p>
          </div>
          <ImageSSS src={`./images/${item.image}`} alt="" />



        </KartSSS>)
      )}

    </div>
  );
};

export default Card;
