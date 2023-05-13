import React from 'react';
import "../styles/style.css";
import {data} from "../helper/data";

const Picture = () => {
    // console.log(data);
  return (
    <div className='image-card'>
        {data.map((item,index)=> <h1>hello</h1> )} 
    </div>
  )
}

export default Picture;