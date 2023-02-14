import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Detail from './components/Detail';
import Create from './components/Create';
import Page404 from './components/Page404';
import axios from "axios";
//necesito darle a axios una url base (la que he utilizado)
//le decimos a nuesto frontend que no va a tener definidda todas las urls a la hora de hacer las peticiones sino que aca va a estar la base de la url
axios.defaults.baseURL = "https://deploy-pi-videogames-production.up.railway.app/";

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Videogames</h1> */}
      <Routes>
        <Route exact path={'/'} element={<LandingPage />}/>
        <Route exact path={'/home'} element={<Home />} />
        <Route exact path={'/detail/:id'} element={<Detail />} />
        <Route exact path={'/create'} element={<Create />} />
        <Route path={'*'} element={<Page404/>} />
      </Routes>
    </div>
  );
}

export default App;
