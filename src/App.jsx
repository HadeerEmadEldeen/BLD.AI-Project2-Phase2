import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import { Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';
import './Component/Style.css';
import FatchData from './Component/FatchData';
import Home from './Component/Home'
import Page2 from './Component/page2/Page2';

function App() {
    return ( 
        <div className = 'continer'>
            <NavBar ></NavBar> 
            <FatchData ></FatchData> 
            <Footer>                 
            </Footer> 
        </div>

    );
}
export default App;