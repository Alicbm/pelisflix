import { Header } from "./header";
import '../styles/specificCategory.css'
import { Footer } from "./footer";
import { AppContext } from "./appContext";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

export function ViewSearch() {
  const { searchMovie, searchMovie2, clickOneMovie, nameOfMovie } = React.useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="specificCategory-container">
      <Header />
      <span onClick={() => navigate(-1)} className='head-arrow'><IoIosArrowBack /> </span>
      <h2 className="specificCategory-title">{nameOfMovie}</h2>
      <div className="specificCategory-movies">
        {
          searchMovie?.results.map(item => (
            <Link to='/description'>
              <img
                src={`${process.env.REACT_APP_URL_IMAGE}${item.poster_path}`}
                alt={item.title}
                onClick={() => clickOneMovie(item)}
                key={item.id}
              />
            </Link>
          ))
        }
        {
          searchMovie2?.results.map(item => (
            <Link to='/description'>
              <img
                src={`${process.env.REACT_APP_URL_IMAGE}${item.poster_path}`}
                alt={item.title}
                onClick={() => clickOneMovie(item)}
                key={item.id}
              />
            </Link>
          ))
        }
      </div>
      <Footer />
    </div>
  )
}