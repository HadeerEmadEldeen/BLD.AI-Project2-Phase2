import React from 'react'
import {Link} from 'react-router-dom';
import './Style.css';
import { useSearchParams  , useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const[searchParams,setSearchParams]=useSearchParams();
  const [searchvalue,setSearchvalue]=useState( searchParams.get('searchvalue'));

  const navigate = useNavigate();
    function searchaction(event){
        event.preventDefault();
        setSearchParams({
            searchvalue:searchvalue
        });
        let path = "/?searchvalue=" + searchvalue;
        navigate(path);
    }
  return (
    <div className="continer">
      <ul className="nav-Bar">
        <li className="menu-icon button-lang "><i className="fa-solid fa-bars"></i></li>
        <Link to="/"><li> <img className="logo" src="/udemy.png" alt="logo" /></li></Link>
        <Link to="/Catorgries"><li className="test"> <button className=" button-border without-border" type="button">Catorgries</button></li></Link>
        <li className="searchBar test">
          <form className='form-search' onSubmit={searchaction}>
            <button id="search-button" className="without-border" type="submit"><i
                className="fa-solid fa-magnifying-glass"></i></button>
            <input id="inputSearch" className="without-border inputSearchClass" placeholder="Search for anything"  value={searchvalue} 
                    onChange={(e) => setSearchvalue(e.target.value)}/>
          </form> 
        </li>
        <Link to="/Udemy-Business"><li className="test"><button className="without-border button-border business-media" type="button">Udemy Business</button></li></Link>
        <Link to="/Teach-on-Udemy"><li className="test"><button className="without-border button-border teach-media"  type="button">Teach on Udemy</button> </li></Link>
        <Link to="/shoping"><li className="test "><button className="button-border without-border shoping-icon"><i className="fa-solid fa-cart-shopping"></i></button>
        </li></Link>
        <Link to="/logIn"><li className="test"><button className="button-border " type="button">Log in</button> </li></Link>
        <Link to="/signup"><li className="test"><button className=" signup" type="button">Sign up</button></li></Link>
        <Link to="/language"><li className="test"><button className="button-lang" ><i  className="fa-solid fa-globe "></i></button></li></Link>
      </ul>  
    </div>  
  )
}

export default NavBar