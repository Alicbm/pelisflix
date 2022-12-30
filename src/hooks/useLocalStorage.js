export function useLocalStorage() {

  // Description Page
  const localStorageDescription = localStorage.getItem('descriptionMovie');
  const localStorageActors = localStorage.getItem('actors');

  let infoDescription;
  let actors;

  if (!localStorageDescription) {
    localStorage.setItem('descriptionMovie', JSON.stringify([]));
    localStorage.setItem('actors', JSON.stringify([]));
    infoDescription = [];
    actors = [];
  } else {
    infoDescription = JSON.parse(localStorageDescription);
    actors = JSON.parse(localStorageActors);
  }

  // List of Movies (SpecificCategory)
  const localStorageDiscover = localStorage.getItem('discover_v1');
  const localStorageDiscover2 = localStorage.getItem('discover_v2');
  const localStorageCategoryName = localStorage.getItem('categoryState');

  let discoverStorage;
  let discoverStorage2;
  let categotyNameStorage;

  if (!localStorageDiscover) {
    localStorage.setItem('discover_v1', JSON.stringify([]));
    localStorage.setItem('discover_v2', JSON.stringify([]));
    localStorage.setItem('categoryState', JSON.stringify([]));
    discoverStorage = [{test:1}];
    discoverStorage2 = [{test:1}];
    categotyNameStorage = [{test:1}];
  } else {
    discoverStorage = JSON.parse(localStorageDiscover);
    discoverStorage2 = JSON.parse(localStorageDiscover2);
    categotyNameStorage = JSON.parse(localStorageCategoryName);
  }

  // Movies of the header section

  const localStorageHeaderMovies = localStorage.getItem('headerMovies');
  const localStorageHeaderMovies2 = localStorage.getItem('headerMoviesTwo');

  let headerMoviesStorage;
  let headerMoviesStorage2;

  if (!localStorageHeaderMovies) {
    localStorage.setItem('headerMovies', JSON.stringify([{test:1}]));
    localStorage.setItem('headerMoviesTwo', JSON.stringify([{test:1}]));
    headerMoviesStorage = [{test:1}];
    headerMoviesStorage2 = [{test:1}];
  } else {
    headerMoviesStorage = JSON.parse(localStorageHeaderMovies);
    headerMoviesStorage2 = JSON.parse(localStorageHeaderMovies2);
  }

  const localStorageSimilarMovies = localStorage.getItem('recommendations');
  const localStorageCategories = localStorage.getItem('categories');
  let similarMovies;
  let categoriesStorage;

  if (!localStorageSimilarMovies) {
    localStorage.setItem('recommendations', JSON.stringify([]));
    localStorage.setItem('categories', JSON.stringify([]));
    similarMovies = [];
    categoriesStorage = [];
  } else {
    similarMovies = JSON.parse(localStorageSimilarMovies);
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