export function useLocalStorage(){

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
    discoverStorage = [];
    discoverStorage2 = [];
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
    localStorage.setItem('headerMovies', JSON.stringify([]));
    localStorage.setItem('headerMoviesTwo', JSON.stringify([]));
    headerMoviesStorage = [];
    headerMoviesStorage2 = [];
  } else {
    headerMoviesStorage = JSON.parse(localStorageHeaderMovies);
    headerMoviesStorage2 = JSON.parse(localStorageHeaderMovies2);
  }

  const localStorageSimilarMovies = localStorage.getItem('recommendations');
  const localStorageCategories = localStorage.getItem('category');
  let similarMovies;
  let categoriesStorage;
  
  if (!localStorageSimilarMovies) {
    localStorage.setItem('recommendations', JSON.stringify([]));
    localStorage.setItem('category', JSON.stringify([]));
    similarMovies = [];
    categoriesStorage = [];
  } else {
    similarMovies = JSON.parse(localStorageSimilarMovies);
    categoriesStorage = JSON.parse(localStorageCategories);
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
    categoriesStorage
  }
}