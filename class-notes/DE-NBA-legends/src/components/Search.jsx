import React, { useState } from 'react';
import "./Search.css"

function Search() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className='search'>
      <input
        type="text"
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
        placeholder='Search Player...'
      />
      <button onClick={() => console.log(searchText)}>Search</button>
    </div>
  );
}

export default Search;
