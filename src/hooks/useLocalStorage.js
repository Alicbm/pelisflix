export function useLocalStorage() {

  // Description Page
  const localStorageDescription = localStorage.getItem('descriptionMovie');
  let infoDescription;

  if (!localStorageDescription) {
    localStorage.setItem('descriptionMovie', JSON.stringify([]));
    infoDescription = [];
  } else {
    infoDescription = JSON.parse(localStorageDescription);
  }

  const localStorageActors = localStorage.getItem('actors');
  let actors;

  if(!localStorageActors){
    localStorage.setItem('actors', JSON.stringify([]));
    actors = [];
  }else{
    actors = JSON.parse(localStorageActors);
  }

  // List of Movies (SpecificCategory)
  const localStorageDiscover = localStorage.getItem('discover_v1');
  const localStorageDiscover2 = localStorage.getItem('discover_v2');

  let discoverStorage;
  let discoverStorage2;

  if (!localStorageDiscover) {
    localStorage.setItem('discover_v1', JSON.stringify([]));
    localStorage.setItem('discover_v2', JSON.stringify([]));
    discoverStorage = [];
    discoverStorage2 = [];
  } else {
    discoverStorage = JSON.parse(localStorageDiscover);
    discoverStorage2 = JSON.parse(localStorageDiscover2);
  }

  const localStorageCategoryName = localStorage.getItem('categoryState');
  let categotyNameStorage;

  if(!localStorageCategoryName){
    localStorage.setItem('categoryState', JSON.stringify([]));
    categotyNameStorage = [];
  }else{
    categotyNameStorage = JSON.parse(localStorageCategoryName);
  }


  // Movies of the header section

  const localStorageHeaderMovies = localStorage.getItem('headerMovies');
  const localStorageHeaderMovies2 = localStorage.getItem('headerMoviesTwo');

  let headerMoviesStorage;
  let headerMoviesStorage2;

  if (!localStorageHeaderMovies) {
    localStorage.setItem('headerMovies', JSON.stringify([]));
    localStorage.setItem('headerMoviesTwo', JSON.stringify([]));
    headerMoviesStorage = [];
    headerMoviesStorage2 = [];
  } else {
    headerMoviesStorage = JSON.parse(localStorageHeaderMovies);
    headerMoviesStorage2 = JSON.parse(localStorageHeaderMovies2);
  }

  const localStorageSimilarMovies = localStorage.getItem('recommendations');
  let similarMovies;

  if (!localStorageSimilarMovies) {
    localStorage.setItem('recommendations', JSON.stringify([]));
    localStorage.setItem('categories', JSON.stringify([]));
    similarMovies = [];
  } else {
    similarMovies = JSON.parse(localStorageSimilarMovies);
  }
  
  const localStorageCategories = localStorage.getItem('categories');
  let categoriesStorage;

  if (!localStorageCategories) {
    localStorage.setItem('categories', JSON.stringify([]));
    categoriesStorage = [];
  } else {
    categoriesStorage = JSON.parse(localStorageCategories);
  }

  const localStorageMovieSearch = localStorage.getItem('movieSearchOne');
  const localStorageMovieSearch2 = localStorage.getItem('movieSearchTwo');
  const localStorageMovieSearchName = localStorage.getItem('movieSearchName');
  let movieSearch;
  let movieSearch2;
  let movieSearchName;

  if (!localStorageMovieSearch) {
    localStorage.setItem('movieSearchOne', JSON.stringify([]));
    localStorage.setItem('movieSearchTwo', JSON.stringify([]));
    movieSearch = [];
    movieSearch2 = [];
  } else {
    movieSearch = JSON.parse(localStorageMovieSearch);
    movieSearch2 = JSON.parse(localStorageMovieSearch2);
    movieSearchName = JSON.parse(localStorageMovieSearchName);
  }

  return {
    infoDescription,
    actors,
    discoverStorage,
    discoverStorage2,
    categotyNameStorage,
    headerMoviesStorage,
    headerMoviesStorage2,

    similarMovies,
    categoriesStorage,

    movieSearch,
    movieSearch2,
    movieSearchName
  }
}