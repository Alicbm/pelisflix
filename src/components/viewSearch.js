import React from "react";
import { AppContext } from "./appContext";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io'
import { Header } from "./header";
import { Footer } from "./footer";
import incognito from '../images/incognito.jpg';
import '../styles/specificCategory.css'

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
            <Link to='/description' key={item?.id}>
              <img
                src={
                  !item?.poster_path ?
                  incognito 
                  :
                  `${process.env.REACT_APP_URL_IMAGE}${item?.poster_path}`
                }
                alt={item?.title}
                onClick={() => clickOneMovie(item)}
              />
            </Link>
          ))
        }
        {
          searchMovie2?.results.map(item => (
            <Link to='/description' key={item?.id}>
              <img
                src={`${process.env.REACT_APP_URL_IMAGE}${item?.poster_path}`}
                alt={item?.title}
                onClick={() => clickOneMovie(item)}
              />
            </Link>
          ))
        }
      </div>
      <Footer />
    </div>
  )
}