import { Header } from "./header";
import { InputSearch } from "./inputSearch";
import '../styles/specificCategory.css'
import { Footer } from "./footer";
import { AppContext } from "./appContext";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';


export function SpecificCategory() {
  const { 
    categoryState,
    discoverMovie, 
    discoverMovie2,
    clickOneMovie, 
  } = React.useContext(AppContext);

  window.scrollTo(0, 0);
  
  const navigate = useNavigate();

  return (
    <div className="specificCategory-container">
      <Header />
      <span onClick={() => navigate(-1)} className='head-arrow'><IoIosArrowBack /> </span>
      <InputSearch />
      <h2 className="specificCategory-title">{categoryState.name}</h2>
      <div className="specificCategory-movies">
        {
          discoverMovie?.results.map(item => (
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
          discoverMovie2?.results.map(item => (
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