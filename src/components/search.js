import React from 'react';
import { InputSearch } from './inputSearch';
import '../styles/search.css'

function Search() {
  return (
    <div className='search-container'>
      <div className='search-text'>
        <h2>Welcome!</h2>
        <p>Come on, this is a place to know the new and the best movies.</p>
      </div>
      <InputSearch />
    </div>
  );
}

export default Search;