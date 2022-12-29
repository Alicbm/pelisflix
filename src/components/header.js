import React from 'react'
import { AppContext } from './appContext';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'
import pelisflix from '../images/pelisflix.png'
import '../styles/header.css'

export function Header() {
  const { headerPopular, headerNowPlaying, headerTopRated } = React.useContext(AppContext);
  const [list, setList] = React.useState(false);

  return (
    <div className="header-container">
      <div className="header-contenainer__menu">
        <Link to='/'>
          <div className="menu-log">
            <img src={pelisflix} alt='Pelisflix logo' />
          </div>
        </Link>
        <div className="menu-icon">
          <span><AiOutlineMenu onClick={() => setList(!list)} className='menu-icon' /></span>
        </div>
      </div>
      <div className="header-container__list">
        <ul className="list-container">
          <Link to='/movie-header'>
            <li onClick={headerPopular}>Popular</li>
          </Link>
          <Link to='/movie-header'>
            <li onClick={headerNowPlaying}>Now Playing</li>
          </Link>
          <Link to='/movie-header'>
            <li onClick={headerTopRated}>Top Rated</li>
          </Link>
        </ul>
      </div>
      {
        list ?
          <div className="header-container__list-cel">
            <ul className="list-container-cel">
            <Link to='/movie-header'>
            <li onClick={headerPopular}>Popular</li>
          </Link>
          <Link to='/movie-header'>
            <li onClick={headerNowPlaying}>Now Playing</li>
          </Link>
          <Link to='/movie-header'>
            <li onClick={headerTopRated}>Top Rated</li>
          </Link>
            </ul>
          </div>
          : ''
      }
    </div>
  )
}