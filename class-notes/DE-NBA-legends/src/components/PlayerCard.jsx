import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import "./PlayerCard.css";

const PlayerCard = (data) => {
  const [isImageVisible, setImageVisible] = useState(true);
  const [isInfoVisible, setInfoVisible] = useState(false);

  // const toggleInfo = () => {
  //   if (isImageVisible) {
  //     setImageVisible(false);
  //     setInfoVisible(true);
  //   } else {
  //     setImageVisible(true);
  //     setInfoVisible(false);
  //   }
  // };
  const toggleInfo = () => {
    setImageVisible(prevImageVisible => !prevImageVisible);
    setInfoVisible(prevInfoVisible => !prevInfoVisible);
  };
  

  return (
    <div className='cards'>
      <div className='image' onClick={toggleInfo}>
        {isImageVisible && (
          <img src={data.img} alt="" />
        )}
      </div>
      <h2 className='name'>{data.name}</h2>

      {isInfoVisible && (
        <ul>
          <li>
            <FontAwesomeIcon icon={faBasketballBall} style={{ color: "#e67205" }} /> {data.statistics[0]}
          </li>
          <li>
            <FontAwesomeIcon icon={faBasketballBall} style={{ color: "#e67205" }} /> {data.statistics[1]}
          </li>
          <li>
            <FontAwesomeIcon icon={faBasketballBall} style={{ color: "#e67205" }} /> {data.statistics[2]}
          </li>
          <li>
            <FontAwesomeIcon icon={faBasketballBall} style={{ color: "#e67205" }} /> {data.statistics[3]}
          </li>
        </ul>
      )}
    </div>
  );
};

export default PlayerCard;
