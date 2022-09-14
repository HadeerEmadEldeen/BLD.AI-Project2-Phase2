import React from 'react'
import {Routes , Route} from 'react-router-dom';
import Home from './Home';
import Page2 from './page2/Page2';

function Routers() {
    return (
        <Routes>
            <Route path={process.env.PUBLIC_URL} element={<Home />}></Route>
            <Route path={`/${process.env.PUBLIC_URL}/course/:id`} element={<Page2></Page2>}></Route>
            <Route path={process.env.PUBLIC_URL} element={<Home />}></Route>
        </Routes>
    )
}

export default Routers