import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ContainerApp } from "./components/appContext";
import { Description } from "./components/description";
import { MoviesHeader } from "./components/moviesHeader";
import { SpecificCategory } from "./components/specificCategory";
import { ViewSearch } from "./components/viewSearch";
import { WelcomePage } from "./mainComponents/welcomePage";


function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/movie-header' element={<MoviesHeader />} />
          <Route path='/description' element={<Description />} />
          <Route path='/category' element={<SpecificCategory />} />
          <Route path='/search' element={<ViewSearch />} />
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  )
}

export default App;
