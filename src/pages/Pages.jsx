import React from 'react'
import Home from './Home.jsx'
import{ Route, Routes, BrowserRouter} from "react-router-dom"
import Cuisine from './Cuisine.jsx'

function Pages() {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine/>}/> 
      {/* NOTE The ":type" allows you to insert different categories as the type */}
      </Routes>
    
  )
}

export default Pages