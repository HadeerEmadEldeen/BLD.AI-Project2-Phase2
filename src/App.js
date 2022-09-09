import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar  from './Component/NavBar';
import {Routes , Route} from 'react-router-dom';
import Home from './Component/Home';
import BoxOfCards from './Component/BoxOfCards';
import './Component/Style.css';
import ElemntOfNav from './Component/ElemntOfNav';

import Page2NavBar from './Component/Page2NavBar';
function App() {
  return (
    <div className='continer'>
      <NavBar></NavBar>
      <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/Catorgries' element={<Page2NavBar />}></Route>
           <Route path='/Udemy-Business' element={<ElemntOfNav />}></Route>
           <Route path='/Teach-on-Udemy' element={<ElemntOfNav />}></Route>
           <Route path='/shoping' element={<ElemntOfNav />}></Route>
           <Route path='/logIn' element={<ElemntOfNav />}></Route>
           <Route path='/signup' element={<ElemntOfNav />}></Route>
           <Route path='/language' element={<ElemntOfNav />}></Route>
      </Routes>
    </div>
  );
}

export default App;
