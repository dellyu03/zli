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
=======
import MainPage from './pages/MainPage/MainPage.js';
import RecipePage from './pages/RecipePage/RecipePage.js';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    //페이지 이동을 구현하는 코드 각 url별로 페이지 컴포넌트들을 연결해줌
    <BrowserRouter>
      <Routes>
        <Route path = "/recipe" element = {<RecipePage/>}/>
        <Route path = "/" element = {<MainPage/>}/>
        {/* <Route path = "/tasting_note" element = {<TastingNote/>}/> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
