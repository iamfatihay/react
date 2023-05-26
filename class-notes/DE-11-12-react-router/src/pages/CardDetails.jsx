import React from 'react';

import data from "../data";
import { useAccordionButton } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const CardDetails = () => {
  const navigate=useNavigate()
  const { namee } = useParams()
  // console.log(namee);

  return (
    <div className="container text-center mt-4">
      {data.map((i) => i.name === namee && (<div>
        <h3>{i.name} </h3>
        <img src={i.img} alt="#" width="300px" />
        <h3>{i.text} </h3>
        <h4>{i.yorum} </h4>
        <div>
          <button className="btn btn-primary" onClick={() => navigate(-1)} >
            GO BACK
          </button>
          <button className="btn btn-warning" onClick={() => navigate("/")} >
            GO HOME
          </button>
        </div>


      </div>))}
    </div>
  );
}

export default CardDetails