import React from 'react'
import Home from './Home.jsx'
import{ Route, Routes, BrowserRouter, useLocation} from "react-router-dom"
import Cuisine from './Cuisine.jsx'
import Searched from './Searched.jsx'
import Recipe from './Recipe.jsx';
import { AnimatePresence } from 'framer-motion'

function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine/>}/> 
            {/* NOTE The ":type" allows you to insert different categories as the type */}
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:name' element={<Recipe/>} />
      </Routes>
    </AnimatePresence>

    
  )
}

export default Pages