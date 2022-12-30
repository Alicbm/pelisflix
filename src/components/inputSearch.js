import React from 'react'
import { AppContext } from './appContext'
import { Link } from 'react-router-dom';
import '../styles/inputSearch.css'

export function InputSearch(){
  const { searchTheMovies, setNameOfMovie } = React.useContext(AppContext);

  const handleChange = (event) =>{
    const value = event.target.value;
    searchTheMovies(value);
    localStorage.setItem('movieSearchName', JSON.stringify(value));
    setNameOfMovie(value);
  }

  return(
    <div className='search-search'>
        <input 
          type='text' 
          placeholder='Search for a movie, tv, show, person...' 
          onChange={handleChange}
        />
        <Link to='/search'>
          <button>Search</button>
        </Link>
    </div>
  )
}