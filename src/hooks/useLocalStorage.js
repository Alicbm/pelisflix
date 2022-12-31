export function useLocalStorage() {
  const arrayCategories = [
    {
      "genres": [
        { "id": 28, "name": "Action" },
        { "id": 12, "name": "Adventure" },
        { "id": 14, "name": "Fantasy" },
        { "id": 878, "name": "Science Fiction" }
      ]
    }]

  const arrayHeader = {
    results:[{
      id: 76600,
      poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      title: "Avatar: The Way of Water"
    }]
  }

 const arrayDiscoverMovies = {
  results:[{
    id: 675353,
    poster_path: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    title: "Sonic the Hedgehog 2"
  }]
 }

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

  if (!localStorageActors) {
    localStorage.setItem('actors', JSON.stringify([]));
    actors = [];
  } else {
    actors = JSON.parse(localStorageActors);
  }

  // List of Movies (SpecificCategory)
  const localStorageDiscover = localStorage.getItem('discover_v1');
  const localStorageDiscover2 = localStorage.getItem('discover_v2');
  let discoverStorage;
  let discoverStorage2;

  if (!localStorageDiscover) {
    localStorage.setItem('discover_v1', JSON.stringify(arrayDiscoverMovies));
    localStorage.setItem('discover_v2', JSON.stringify(arrayDiscoverMovies));
    discoverStorage = arrayDiscoverMovies;
    discoverStorage2 = arrayDiscoverMovies;
  } else {
    discoverStorage = JSON.parse(localStorageDiscover);
    discoverStorage2 = JSON.parse(localStorageDiscover2);
  }

  const localStorageCategoryName = localStorage.getItem('categoryState');
  let categotyNameStorage;

  if (!localStorageCategoryName) {
    localStorage.setItem('categoryState', JSON.stringify([]));
    categotyNameStorage = [];
  } else {
    categotyNameStorage = JSON.parse(localStorageCategoryName);
  }


  // Movies of the header section

  const localStorageHeaderMovies = localStorage.getItem('headerMovies');
  const localStorageHeaderMovies2 = localStorage.getItem('headerMoviesTwo');
  let headerMoviesStorage;
  let headerMoviesStorage2;

  if(!localStorageHeaderMovies){
    localStorage.setItem('headerMovies', JSON.stringify(arrayHeader));
    localStorage.setItem('headerMoviesTwo', JSON.stringify(arrayHeader));
    headerMoviesStorage = arrayHeader;
    headerMoviesStorage2 = arrayHeader;
  }else{
    headerMoviesStorage = JSON.parse(localStorageHeaderMovies);
    headerMoviesStorage2 = JSON.parse(localStorageHeaderMovies2);
  }

  const localStorageSimilarMovies = localStorage.getItem('recommendations');
  let similarMovies;

  if (!localStorageSimilarMovies) {
    localStorage.setItem('recommendations', JSON.stringify([]));
    similarMovies = [];
  } else {
    similarMovies = JSON.parse(localStorageSimilarMovies);
  }


  localStorage.setItem('categories', JSON.stringify(arrayCategories));
  const localStorageCategories = localStorage.getItem('categories');
  let categoriesStorage = JSON.parse(localStorageCategories);

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