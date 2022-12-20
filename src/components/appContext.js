import React from 'react';

export const AppContext = React.createContext();

export function ContainerApp({ children }) {
  const [headerMovies, setHeaderMovies] = React.useState(null);
  const [headerMovies2, setHeaderMovies2] = React.useState(null);

  const [trending, setTrending] = React.useState(null);
  const [moviePopular, setMoviePopular] = React.useState(null);
  const [movieRated, setMovieRated] = React.useState(null);
  const [nowPlaying, setNowPlaying] = React.useState(null);
  const [eachCategory, setEachCategory] = React.useState(null);

  const [optionPopular, setOptionPopular] = React.useState(false);
  const [optionTopRated, setOptionTopRated] = React.useState(false);
  const [categoryState, setCategoryState] = React.useState(null);
  
  const [discoverMovie, setDiscoverMovie] = React.useState(null);
  const [discoverMovie2, setDiscoverMovie2] = React.useState(null);

  const [descriptionMovie, setDescriptionMovie] = React.useState(null);
  const [workersMovie, setWorkersMovie] = React.useState([]);

  const [detailCategory, setDetailCategory] = React.useState([]);
  const [nameOfMovie, setNameOfMovie] = React.useState('');  
  const [searchMovie, setSearhMovie] = React.useState(null);

  const [moviesRecommendations, setMoviesRecommendations] = React.useState([]);

  // Function for the redirect to anothertypes of movies
  const headerPopular = async () => {
    const popularOnePage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/popular?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=1');
    const popularTwoPage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/popular?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=2');

    const jsonpopularOnePage = await popularOnePage.json();
    const jsonpopularTwoPage = await popularTwoPage.json();

    setHeaderMovies(jsonpopularOnePage);
    setHeaderMovies2(jsonpopularTwoPage);
  }
  const headerNowPlaying = async () => {
    const nowPlayingOnePage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/now_playing?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=1');
    const nowPlayingTwoPage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/now_playing?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=2');
  
    const jsonnowPlayingOnePage = await nowPlayingOnePage.json();
    const jsonnowPlayingTwoPage = await nowPlayingTwoPage.json();

    setHeaderMovies(jsonnowPlayingOnePage);
    setHeaderMovies2(jsonnowPlayingTwoPage);
  }
  const headerTopRated = async () => {
    const topRatedOnePage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/top_rated?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=1');
    const topRatedTwoPage = await fetch(process.env.REACT_APP_MAIN_URL + '/movie/top_rated?api_key=' + process.env.REACT_APP_KEY + '&language=en-US&page=2');
  
    const jsontopRatedOnePage = await topRatedOnePage.json();
    const jsontopRatedTwoPage= await topRatedTwoPage.json();

    setHeaderMovies(jsontopRatedOnePage);
    setHeaderMovies2(jsontopRatedTwoPage);
  }


  // Function's json
  const functionJson = async () => {
    //Trending
    const trending = await fetch(`${process.env.REACT_APP_MAIN_URL}/trending/all/day?api_key=${process.env.REACT_APP_KEY}`);
    const jsonTrending = await trending.json();
    setTrending(jsonTrending);

    //Movies Popular
    const popularMovie = await fetch(`${process.env.REACT_APP_MAIN_URL}/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`);
    const jsonPopularMovie = await popularMovie.json();
    setMoviePopular(jsonPopularMovie);
  
    //Movies Top Rated
    const ratedMovie = await fetch(`${process.env.REACT_APP_MAIN_URL}/movie/top_rated?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`);
    const jsonRatedMovie = await ratedMovie.json();
    setMovieRated(jsonRatedMovie);

    //Now Playing
    const playingNow = await fetch(`${process.env.REACT_APP_MAIN_URL}/movie/now_playing?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`);
    const jsonPlayingNow = await playingNow.json();
    setNowPlaying(jsonPlayingNow);

    //Categories
    const categories = await fetch(`${process.env.REACT_APP_MAIN_URL}/genre/movie/list?api_key=${process.env.REACT_APP_KEY}`); 
    const jsonCategories = await categories.json();
    setEachCategory(jsonCategories);
  }

  const clickOneMovie = async (item) => {
    setDescriptionMovie(item)

    //Movie workers
    const movieWorkers = await fetch(`${process.env.REACT_APP_MAIN_URL}/movie/${item.id}/credits?api_key=${process.env.REACT_APP_KEY}`);
    const jsonMovieWorkers = await movieWorkers.json();
    const tvWorkers = await fetch(`${process.env.REACT_APP_MAIN_URL}/tv/${item.id}/credits?api_key=${process.env.REACT_APP_KEY}`);
    const jsonTvWorkers = await tvWorkers.json();

    setWorkersMovie([jsonMovieWorkers, jsonTvWorkers]);

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

  const selectOneCategory = async (item) => {
    setCategoryState(item);

    const movieDiscover = await fetch(`${process.env.REACT_APP_MAIN_URL}/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1&with_genres=${item.id}`);
    const jsonMovieDiscover = await movieDiscover.json();
    setDiscoverMovie(jsonMovieDiscover);

    const movieDiscover2 = await fetch(`${process.env.REACT_APP_MAIN_URL}/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=2&with_genres=${item.id}`);
    const jsonMovieDiscover2 = await movieDiscover2.json();
    setDiscoverMovie2(jsonMovieDiscover2);
  }

  const searchTheMovies = async (nameMovie) => {
    // Search movies
    const movieSearch = await fetch(`${process.env.REACT_APP_MAIN_URL}/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${nameMovie}`);
    const jsonMovieSearch = await movieSearch.json();
    setSearhMovie(jsonMovieSearch);
  }

  React.useEffect(() => {
    functionJson();
  }, []);

  return (
    <AppContext.Provider value={{
      headerMovies, 
      setHeaderMovies,
      headerMovies2, 
      setHeaderMovies2,

      headerPopular, 
      headerNowPlaying, 
      headerTopRated,

      trending,
      setTrending,
      moviePopular,
      movieRated,
      nowPlaying,
      eachCategory,

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
      searchTheMovies,
      nameOfMovie, 
      setNameOfMovie,

      moviesRecommendations,
    }}>
      {children}
    </AppContext.Provider>
  )
}