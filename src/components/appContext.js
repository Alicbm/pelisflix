import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AppContext = React.createContext();

export function ContainerApp({ children }) {

  const { 
    infoDescription,
    actors,
    discoverStorage,
    discoverStorage2,
    categotyNameStorage,
    headerMoviesStorage,
    headerMoviesStorage2,
   } = useLocalStorage();

  const [headerMovies, setHeaderMovies] = React.useState(headerMoviesStorage);
  const [headerMovies2, setHeaderMovies2] = React.useState(headerMoviesStorage2);

  const [optionPopular, setOptionPopular] = React.useState(false);
  const [optionTopRated, setOptionTopRated] = React.useState(false);
  const [categoryState, setCategoryState] = React.useState(categotyNameStorage);
  
  const [discoverMovie, setDiscoverMovie] = React.useState(discoverStorage);
  const [discoverMovie2, setDiscoverMovie2] = React.useState(discoverStorage2);

  const [descriptionMovie, setDescriptionMovie] = React.useState(infoDescription);
  const [workersMovie, setWorkersMovie] = React.useState(actors);

  const [detailCategory, setDetailCategory] = React.useState([]);
  const [nameOfMovie, setNameOfMovie] = React.useState('');  
  const [searchMovie, setSearhMovie] = React.useState(null);
  const [searchMovie2, setSearchMovie2] = React.useState(null);

  const [moviesRecommendations, setMoviesRecommendations] = React.useState([]);

  // Function for the redirect to anothertypes of movies
  const headerPopular = async () => {
    const popularOnePage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/popular?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=1');
    const popularTwoPage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/popular?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=2');

    const jsonpopularOnePage = await popularOnePage.json();
    const jsonpopularTwoPage = await popularTwoPage.json();

    setHeaderMovies(jsonpopularOnePage);
    setHeaderMovies2(jsonpopularTwoPage);

    localStorage.setItem('headerMovies', JSON.stringify(jsonpopularOnePage));
    localStorage.setItem('headerMoviesTwo', JSON.stringify(jsonpopularTwoPage));
  }
  const headerNowPlaying = async () => {
    const nowPlayingOnePage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/now_playing?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=1');
    const nowPlayingTwoPage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/now_playing?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=2');
  
    const jsonnowPlayingOnePage = await nowPlayingOnePage.json();
    const jsonnowPlayingTwoPage = await nowPlayingTwoPage.json();

    setHeaderMovies(jsonnowPlayingOnePage);
    setHeaderMovies2(jsonnowPlayingTwoPage);

    localStorage.setItem('headerMovies', JSON.stringify(jsonnowPlayingOnePage));
    localStorage.setItem('headerMoviesTwo', JSON.stringify(jsonnowPlayingTwoPage));

  }
  const headerTopRated = async () => {
    const topRatedOnePage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/top_rated?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=1');
    const topRatedTwoPage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/top_rated?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=2');
  
    const jsontopRatedOnePage = await topRatedOnePage.json();
    const jsontopRatedTwoPage= await topRatedTwoPage.json();

    setHeaderMovies(jsontopRatedOnePage);
    setHeaderMovies2(jsontopRatedTwoPage);

    localStorage.setItem('headerMovies', JSON.stringify(jsontopRatedOnePage));
    localStorage.setItem('headerMoviesTwo', JSON.stringify(jsontopRatedTwoPage));
  }

  // Function that happen when you click on a movie
  const clickOneMovie = async (item) => {
    localStorage.setItem('descriptionMovie', JSON.stringify(item));
    setDescriptionMovie(item)

    //Movie workers
    const movieWorkers = await fetch(`${process.env.REACT_APP_MAIN_URL}/movie/${item.id}/credits?api_key=${process.env.REACT_APP_KEY}`);
    const jsonMovieWorkers = await movieWorkers.json();
    const tvWorkers = await fetch(`${process.env.REACT_APP_MAIN_URL}/tv/${item.id}/credits?api_key=${process.env.REACT_APP_KEY}`);
    const jsonTvWorkers = await tvWorkers.json();

    setWorkersMovie([jsonMovieWorkers, jsonTvWorkers]);
    localStorage.setItem('actors', JSON.stringify([jsonMovieWorkers, jsonTvWorkers]));

    const categoryDetailMovie = await fetch(`${process.env.REACT_APP_MAIN_URL}/movie/${item.id}?api_key=${process.env.REACT_APP_KEY}`);
    const jsonCategoryDetailMovie = await categoryDetailMovie.json();
    const categoryDetailTv = await fetch(`${process.env.REACT_APP_MAIN_URL}/tv/${item.id}?api_key=${process.env.REACT_APP_KEY}`);
    const jsonCategoryDetailTv = await categoryDetailTv.json();
    setDetailCategory([jsonCategoryDetailMovie, jsonCategoryDetailTv]);

    //recommendations of movies
    const recommendationsMovies = await fetch(`${process.env.REACT_APP_MAIN_URL}/movie/${item.id}/similar?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=2&with_genres=${item.id}`);
    const jsonRecommendationsMovies = await recommendationsMovies.json();
    const recommendationsTv = await fetch(`${process.env.REACT_APP_MAIN_URL}/tv/${item.id}/similar?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=2&with_genres=${item.id}`);
    const jsonRecommendationsTv = await recommendationsTv.json();
    setMoviesRecommendations([jsonRecommendationsMovies, jsonRecommendationsTv]);

  }

  // Function that happen when you click on a category
  const selectOneCategory = async (item) => {
    setCategoryState(item);
    localStorage.setItem('categoryState', JSON.stringify(item));

    const movieDiscover = await fetch(`${process.env.REACT_APP_MAIN_URL}/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1&with_genres=${item.id}`);
    const jsonMovieDiscover = await movieDiscover.json();
    localStorage.setItem('discover_v1', JSON.stringify(jsonMovieDiscover));
    setDiscoverMovie(jsonMovieDiscover);

    const movieDiscover2 = await fetch(`${process.env.REACT_APP_MAIN_URL}/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=2&with_genres=${item.id}`);
    const jsonMovieDiscover2 = await movieDiscover2.json();
    localStorage.setItem('discover_v2', JSON.stringify(jsonMovieDiscover2));
    setDiscoverMovie2(jsonMovieDiscover2);
  }

  // Function that give the results when you search a movie in specific
  const searchTheMovies = async (nameMovie) => {
    // Search movies
    const movieSearch = await fetch(`${process.env.REACT_APP_MAIN_URL}/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${nameMovie}`);
    const jsonMovieSearch = await movieSearch.json();
    setSearhMovie(jsonMovieSearch);

    const nowPlayingOnePage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/now_playing?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=1');  
    const jsonnowPlayingOnePage = await nowPlayingOnePage.json();

    setSearchMovie2(jsonnowPlayingOnePage);
  }

  return (
    <AppContext.Provider value={{
      headerMovies, 
      setHeaderMovies,
      headerMovies2, 
      setHeaderMovies2,

      headerPopular, 
      headerNowPlaying, 
      headerTopRated,

      optionPopular,
      setOptionPopular,
      optionTopRated,
      setOptionTopRated,

      categoryState,
      setCategoryState,

      discoverMovie,
      setDiscoverMovie,
      discoverMovie2, 
      setDiscoverMovie2,

      descriptionMovie, 
      setDescriptionMovie,

      workersMovie,
      setWorkersMovie,

      detailCategory, 
      setDetailCategory,

      clickOneMovie,

      selectOneCategory,
      searchMovie, 
      setSearhMovie,
      searchMovie2,
      searchTheMovies,
      nameOfMovie, 
      setNameOfMovie,

      moviesRecommendations,
    }}>
      {children}
    </AppContext.Provider>
  )
}