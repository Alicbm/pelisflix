import React from 'react'
import { AppContext } from './appContext';
import { Link } from 'react-router-dom';
import '../styles/carousel.css'

export function Carousel({ array, title, }) {
  const { clickOneMovie } = React.useContext(AppContext);


  return (
    <div className="carousel-container">
      <div className='carousel-head'>
        <h2 className="carousel-head-title">{title}</h2>
      </div>
      <div className="carousel-content">
        {
          array?.results.map(item => (
            <div
              className="carousel-content__item"
              key={item.id}
            >
              <Link to='/description'>
                <img
                  className="item-movie"
                  src={`${process.env.REACT_APP_URL_IMAGE}${item.poster_path}`}
                  alt={`${item.title || item.name}`}
                  onClick={() => clickOneMovie(item)}
                />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}





