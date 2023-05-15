import React from 'react';
import "../styles/style.css";
import { data } from "../helper/data";

const Picture = () => {
  console.log(data);
  return (
    <div className='image-card'>
      {data.map((item, index) => {
        return (
          <div className="kart" key={index}>
            <div className="image">
              <img src={item.src.large} alt=""/>

            </div>

            <h1 className='name'>{item.photographer} </h1>
          </div>
        )
      })}
    </div>
  )
}

export default Picture;