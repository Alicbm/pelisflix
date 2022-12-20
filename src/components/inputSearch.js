import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/inputSearch.css'
import { AppContext } from './appContext'

export function InputSearch(){
  const { searchTheMovies, setNameOfMovie } = React.useContext(AppContext);

  const handleChange = (event) =>{
    const value = event.target.value;
    searchTheMovies(value);
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