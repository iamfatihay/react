import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import "./PlayerCard.css";

const PlayerCard = (data) => {
    





  return (
    <div className='cards'>
        <div className='image'>
            <img src={data.img} alt="" />
        </div>
        <h2 className='name'>{data.name} </h2>
        <ul>
            <li><FontAwesomeIcon icon={faBasketballBall} style={{color: "#e67205",}} /> {data.statistics[0]}</li>
            <li><FontAwesomeIcon icon={faBasketballBall} style={{color: "#e67205",}} />{data.statistics[1]}</li>
            <li><FontAwesomeIcon icon={faBasketballBall} style={{color: "#e67205",}} />{data.statistics[2]}</li>
            <li><FontAwesomeIcon icon={faBasketballBall} style={{color: "#e67205",}} />{data.statistics[3]}</li>
        </ul>

    </div>
  )
}

export default PlayerCard