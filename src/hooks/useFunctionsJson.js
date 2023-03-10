import React from "react";

export function useFunctionsJson(){
  const [trending, setTrending] = React.useState(null);
  const [moviePopular, setMoviePopular] = React.useState(null);
  const [movieRated, setMovieRated] = React.useState(null);
  const [nowPlaying, setNowPlaying] = React.useState(null);
  const [eachCategory, setEachCategory] = React.useState(null);

  const mainUrl = process.env.REACT_APP_MAIN_URL;
  const apiKey = process.env.REACT_APP_KEY;

  // Function's json
  const functionJson = async () => {
    //Trending
    const trending = await fetch(`${mainUrl}/trending/all/day?api_key=${apiKey}`);
    const jsonTrending = await trending.json();
    setTrending(jsonTrending);

    //Movies Popular
    const popularMovie = await fetch(`${mainUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    const jsonPopularMovie = await popularMovie.json();
    setMoviePopular(jsonPopularMovie);
  
    //Movies Top Rated
    const ratedMovie = await fetch(`${mainUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
    const jsonRatedMovie = await ratedMovie.json();
    setMovieRated(jsonRatedMovie);

    //Now Playing
    const playingNow = await fetch(`${mainUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
    const jsonPlayingNow = await playingNow.json();
    setNowPlaying(jsonPlayingNow);

    //Categories
    const categories = await fetch(`${mainUrl}/genre/movie/list?api_key=${apiKey}`); 
    const jsonCategories = await categories.json();
    setEachCategory(jsonCategories);
  }

  React.useEffect(() => {
    functionJson();
  }, []);

  return{
    trending,
    setTrending,
    moviePopular,
    setMoviePopular,
    movieRated,
    setMovieRated,
    nowPlaying,
    setNowPlaying,
    eachCategory,
    setEachCategory,
  }
}
