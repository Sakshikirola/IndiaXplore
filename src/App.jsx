import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import StatePlaces from './Components/StatePlaces'
import Navbar from './Components/Navbar'
import Wishlist from './Components/WishList' 
import Home from './Components/Home' 
import About from './Components/About'

const App = () => {
  return ( 
    <>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />   
        <Route path="/destinations/:stateSlug" element={<StatePlaces />} /> 
        <Route path="/wishlist" element={<Wishlist />} />  
      </Routes>
      <Footer />
    </>
  )
}

export default App
