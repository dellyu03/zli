import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage/MainPage.js'
import RecipePage from './pages/RecipePage/RecipePage.js'
import TnotePage from './pages/TnotePage/TnotePage.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <Routes>
          <Route path = "/" element = {<MainPage/>}/>
          <Route path = "/recipe_detail" element = {<RecipePage/>}/>
          <Route path = "/tasting_note" element = {<TnotePage/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
