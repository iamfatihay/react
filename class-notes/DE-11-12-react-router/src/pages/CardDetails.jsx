import React from 'react';

import data from "../data";
import { useAccordionButton } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  
  const {namee}=useParams() 
  // console.log(namee);

  return (
    <div className="container text-center mt-4">
      {data.map((i)=>i.name===namee && ( <div>
          <h3>{i.name} </h3>
          <img src={i.img} alt="#" width="300px" />
          <h3>{i.text} </h3>
          <h4>{i.yorum} </h4>



      </div> ))}
    </div>
  );
}

export default CardDetails