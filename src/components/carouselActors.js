import React from 'react'
import { AppContext } from './appContext';
import unknown from '../images/unknown.jpg'
import '../styles/carouselActors.css'

export function CarouselActors() {
  const { workersMovie } = React.useContext(AppContext);

  return (
    <div className="carouselActors-container">
      <h2 className='carouselActors-title'>Top Billed Cast</h2>
      <div className='carouselActors-container__carousel'>
        {
          workersMovie[0]?.cast.map(item => (
            <div className="carouselActors-content" key={item?.id}>
              <img src={
                !item?.profile_path ?
                  unknown
                  :
                  `${process.env.REACT_APP_URL_IMAGE}${item?.profile_path}`
              } className="carouselActors-content__img" alt='actor' />
              <div className="carouselActors-content__actor">
                <h3>{item?.name.slice(0, 18)}</h3>
                <p>{item?.character.slice(0, 16)}</p>
              </div>
            </div>
          ))
        }
        {
          !workersMovie[0]?.cast.length &&
           workersMovie[0]?.crew.map(item => (
            <div className="carouselActors-content" key={item?.id}>
              <img src={
                !item?.profile_path ?
                  unknown
                  :
                  `${process.env.REACT_APP_URL_IMAGE}${item?.profile_path}`
              } className="carouselActors-content__img" alt='actor' />
              <div className="carouselActors-content__actor">
                <h3>{item?.name.slice(0, 18)}</h3>
                <p>{item?.department.slice(0, 16)}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}