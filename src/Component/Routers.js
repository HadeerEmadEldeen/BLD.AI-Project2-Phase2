import React from 'react'
import {Routes , Route} from 'react-router-dom';
import Home from './Home';
import Page2 from './page2/Page2';
function Routers() {
  return (
    <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/course/:id' element={<Page2></Page2>}></Route>
           <Route path='*' element={<Home />}></Route>
          
    </Routes>
  )
}

export default Routers