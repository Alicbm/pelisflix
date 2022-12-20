import { Header } from "./header";
import { InputSearch } from "./inputSearch";
import '../styles/specificCategory.css'
import { Footer } from "./footer";
import { AppContext } from "./appContext";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';


export function MoviesHeader() {
  const { headerMovies, headerMovies2, clickOneMovie } = React.useContext(AppContext);
  const navigate = useNavigate();

  window.scrollTo(0, 0);

  return (
    <div className="specificCategory-container">
      <Header />
      <span onClick={() => navigate(-1)} className='head-arrow'><IoIosArrowBack /> </span>
      <InputSearch />
      <h2 className="specificCategory-title">
        ¡The place of the best movies!
      </h2>
      <div className="specificCategory-movies">
        {
          headerMovies?.results.map(item => (
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
          headerMovies2?.results.map(item => (
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