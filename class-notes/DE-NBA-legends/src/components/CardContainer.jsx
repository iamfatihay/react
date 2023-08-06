import React, { useCallback, useState } from 'react';
import "./CardContainer.css";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = useCallback((event) => {
    setSearchText(event.target.value);
    // eslint-disable-next-line
  }, []);

  const filteredPlayer = data.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );

  // console.log(data);
  return (
    <div className="card-container">
      <div className='search'>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          autoFocus
          placeholder='Search Player...'
        />
       
      </div>
      <div className='card-container1'>
        {filteredPlayer.map((item, index) => <PlayerCard {...item} key={index} />)}
      </div>
    </div>
  )
}

export default CardContainer