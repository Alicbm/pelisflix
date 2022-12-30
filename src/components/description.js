import React from 'react';
import { AppContext } from './appContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io'
import { BsCalendarDate } from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';
import { Header } from './header';
import { CarouselActors } from './carouselActors';
import { Carousel } from './carousel';
import { Footer } from './footer';
import '../styles/description.css'

export function Description(){
  const { 
    descriptionMovie, 
    detailCategory, 
    selectOneCategory,
    moviesRecommendations, 
  } = React.useContext(AppContext);

  const styleBackground = {
    background: `linear-gradient(rgba(0 0 0 / 0.9), rgba(0 0 0 / 0.7)), url(https://image.tmdb.org/t/p/original${descriptionMovie.backdrop_path})`,
  }
  
  if(moviesRecommendations){
    localStorage.setItem('recommendations', JSON.stringify(moviesRecommendations));
    localStorage.setItem('categories', JSON.stringify(detailCategory));
  }
  console.log(detailCategory);
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  return(
    <div className="description-container">
      <Header />
      <div 
        className="description-container__head"
        style={styleBackground}
      >
          <span onClick={() => navigate(-1)} className='head-arrow'><IoIosArrowBack /> </span>
         <img 
          className="description-container__head-img" 
          src={`${process.env.REACT_APP_URL_IMAGE}${descriptionMovie?.poster_path}`} 
          alt='Name movie'
        />
         <div className="description-container__head-description">
          <div className='head-description__title'>
            <h2 className='title-title'>{descriptionMovie?.title || descriptionMovie?.name}</h2>
            <p className='head-overview__description'>{descriptionMovie?.overview.slice(0, 200)}</p>
            <p className='head-overview__description--long'>{descriptionMovie?.overview.slice(0, 420)}</p>
          </div>
          <div className='head-description__categories'>
            <p className='categories-date'>
              <span><BsCalendarDate className='icon-category-date'/></span>{descriptionMovie?.first_air_date || descriptionMovie?.release_date}
            </p>
            <ul className='categories-type'>
              <li>
                <span><BiMoviePlay className='icon-category-type'/></span>
                <span className='categories-type__able'>
                  {
                    descriptionMovie?.adult
                      ? 'Not suitable for children'
                      : 'Suitable for childrens'
                  }
                </span>
              </li>
            </ul>
          </div>
          <div className='head-description__score'>
            <h3 className='score-score'>Popularity</h3>
            <p className='score-porcent'>{detailCategory?.popularity || descriptionMovie?.popularity}</p>
          </div>
         </div> 
      </div>
      <div className='description-container__overview'>
        <div className='overview-overview'>
          <h3 className='overview-overview__title'>Overview</h3>
          <p className='overview-overview__description'>{descriptionMovie?.overview}</p>
        </div>
        <div className='overview-workers'>
          {
            detailCategory[0]?.genres.map(item => (
              <Link to='/category' key={item?.id}>
                <div 
                  className='overview-workers__one' 
                  onClick={() => selectOneCategory(item)}
                >
                  <h4>{item?.name}</h4>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <CarouselActors />
      <Carousel array={moviesRecommendations[0]} title='Similar Movies'/>
      <Footer />
    </div>
  )
}