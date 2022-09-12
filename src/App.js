import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar  from './Component/NavBar';
import {Routes , Route} from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Footer';
import './Component/Style.css';
import Routers from './Component/Routers';
import FatchData from './Component/FatchData';
import Page2 from './Component/page2/Page2';
function App() {
  return (
    <div className='continer'>
      <NavBar></NavBar>
      <FatchData></FatchData>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
