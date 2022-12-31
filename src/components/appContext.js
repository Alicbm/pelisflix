import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    movieSearch,
    movieSearch2,
    movieSearchName,
    categoriesStorage,
    similarMovies,
   } = useLocalStorage();

   const mainUrl = process.env.REACT_APP_MAIN_URL;
   const apiKey = process.env.REACT_APP_KEY;

  const [headerMovies, setHeaderMovies] = React.useState(headerMoviesStorage);
  const [headerMovies2, setHeaderMovies2] = React.useState(headerMoviesStorage2);

  const [optionPopular, setOptionPopular] = React.useState(false);
  const [optionTopRated, setOptionTopRated] = React.useState(false);
  const [categoryState, setCategoryState] = React.useState(categotyNameStorage);
  
  const [discoverMovie, setDiscoverMovie] = React.useState(discoverStorage);
  const [discoverMovie2, setDiscoverMovie2] = React.useState(discoverStorage2);

  const [descriptionMovie, setDescriptionMovie] = React.useState(infoDescription);
  const [workersMovie, setWorkersMovie] = React.useState(actors);

  const [detailCategory, setDetailCategory] = React.useState(categoriesStorage);
  const [nameOfMovie, setNameOfMovie] = React.useState(movieSearchName);  
  const [searchMovie, setSearhMovie] = React.useState(movieSearch);
  const [searchMovie2, setSearchMovie2] = React.useState(movieSearch2);

  const [moviesRecommendations, setMoviesRecommendations] = React.useState(similarMovies);


  // Function for the redirect to anothertypes of movies
  const headerPopular = async () => {
    const popularOnePage = await fetch(mainUrl + '/movie/popular?api_key=' + apiKey + '&language=en-US&page=1');
    const popularTwoPage = await fetch(mainUrl + '/movie/popular?api_key=' + apiKey + '&language=en-US&page=2');

    const jsonpopularOnePage = await popularOnePage.json();
    const jsonpopularTwoPage = await popularTwoPage.json();

    setHeaderMovies(jsonpopularOnePage);
    setHeaderMovies2(jsonpopularTwoPage);

    localStorage.setItem('headerMovies', JSON.stringify(jsonpopularOnePage));
    localStorage.setItem('headerMoviesTwo', JSON.stringify(jsonpopularTwoPage));
  }
  const headerNowPlaying = async () => {
    const nowPlayingOnePage = await fetch(mainUrl + '/movie/now_playing?api_key=' + apiKey + '&language=en-US&page=1');
    const nowPlayingTwoPage = await fetch(mainUrl + '/movie/now_playing?api_key=' + apiKey + '&language=en-US&page=2');
  
    const jsonnowPlayingOnePage = await nowPlayingOnePage.json();
    const jsonnowPlayingTwoPage = await nowPlayingTwoPage.json();

    setHeaderMovies(jsonnowPlayingOnePage);
    setHeaderMovies2(jsonnowPlayingTwoPage);

    localStorage.setItem('headerMovies', JSON.stringify(jsonnowPlayingOnePage));
    localStorage.setItem('headerMoviesTwo', JSON.stringify(jsonnowPlayingTwoPage));

  }
  const headerTopRated = async () => {
    const topRatedOnePage = await fetch(mainUrl + '/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1');
    const topRatedTwoPage = await fetch(mainUrl + '/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=2');
  
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

    const movieWorkers = await fetch(`${mainUrl}/movie/${item.id}/credits?api_key=${apiKey}`);
    const jsonMovieWorkers = await movieWorkers.json();

    //For movies
    if (jsonMovieWorkers.cast) {
      //Movie workers
      setWorkersMovie([jsonMovieWorkers]);
      localStorage.setItem('actors', JSON.stringify([jsonMovieWorkers]));

      const categoryDetailMovie = await fetch(`${mainUrl}/movie/${item.id}?api_key=${apiKey}`);
      const jsonCategoryDetailMovie = await categoryDetailMovie.json();
      setDetailCategory([jsonCategoryDetailMovie]);

      //recommendations of movies
      const recommendationsMovies = await fetch(`${mainUrl}/movie/${item.id}/similar?api_key=${apiKey}&language=en-US&page=2&with_genres=${item.id}`);
      const jsonRecommendationsMovies = await recommendationsMovies.json();
      setMoviesRecommendations([jsonRecommendationsMovies]);
    } 
    //for tv shows
    else {
      const tvWorkers = await fetch(`${mainUrl}/tv/${item.id}/credits?api_key=${apiKey}`);
      const jsonTvWorkers = await tvWorkers.json();

      setWorkersMovie([jsonTvWorkers]);
      localStorage.setItem('actors', JSON.stringify([jsonTvWorkers]));

      const categoryDetailTv = await fetch(`${mainUrl}/tv/${item.id}?api_key=${apiKey}`);
      const jsonCategoryDetailTv = await categoryDetailTv.json();
      setDetailCategory([jsonCategoryDetailTv]);

      //recommendations of movies
      const recommendationsTv = await fetch(`${mainUrl}/tv/${item.id}/similar?api_key=${apiKey}&language=en-US&page=2&with_genres=${item.id}`);
      const jsonRecommendationsTv = await recommendationsTv.json();
      setMoviesRecommendations([jsonRecommendationsTv]);
    }
  }

  // Function that happen when you click on a category
  const selectOneCategory = async (item) => {
    setCategoryState(item);
    localStorage.setItem('categoryState', JSON.stringify(item));

    const movieDiscover = await fetch(`${mainUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=${item.id}`);
    const jsonMovieDiscover = await movieDiscover.json();
    localStorage.setItem('discover_v1', JSON.stringify(jsonMovieDiscover));
    setDiscoverMovie(jsonMovieDiscover);

    const movieDiscover2 = await fetch(`${mainUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=2&with_genres=${item.id}`);
    const jsonMovieDiscover2 = await movieDiscover2.json();
    localStorage.setItem('discover_v2', JSON.stringify(jsonMovieDiscover2));
    setDiscoverMovie2(jsonMovieDiscover2);
  }

  // Function that give the results when you search a movie in specific
  const searchTheMovies = async (nameMovie) => {
    // Search movies
    const movieSearch = await fetch(`${mainUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${nameMovie}`);
    const jsonMovieSearch = await movieSearch.json();

    localStorage.setItem('movieSearchOne', JSON.stringify(jsonMovieSearch));
    setSearhMovie(jsonMovieSearch);

    const nowPlayingOnePage = await fetch(mainUrl + '/movie/now_playing?api_key=' + apiKey + '&language=en-US&page=1');  
    const jsonnowPlayingOnePage = await nowPlayingOnePage.json();

    localStorage.setItem('movieSearchTwo', JSON.stringify(jsonnowPlayingOnePage));
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