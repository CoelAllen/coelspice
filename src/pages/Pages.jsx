import React from 'react'
import Home from './Home.jsx'
import{ Route, Routes, BrowserRouter} from "react-router-dom"
import Cuisine from './Cuisine.jsx'
import Searched from './Searched.jsx'

function Pages() {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine/>}/> 
      {/* NOTE The ":type" allows you to insert different categories as the type */}
      <Route path='/searched/:search' element={<Searched />} />
      </Routes>
    
  )
}

export default Pages