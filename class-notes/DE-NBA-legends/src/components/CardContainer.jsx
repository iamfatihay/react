import React from 'react';
import "./CardContainer.css";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
    console.log(data);
  return (
    <div className="card-container">
            {data.map((item, index)=> <PlayerCard {...item} key={index}/>)}
    </div>
  )
}

export default CardContainer