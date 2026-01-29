import React, { useState } from 'react'
import IndiaFlag from '../assets/flag.png'
import { FaBars, FaTimes } from 'react-icons/fa' 
import { useNavigate } from "react-router-dom"
import DestinationCard from './DestinationCard'

const Navbar = () => {
  const [menu, setMenu] = useState(false) 
  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white shadow-lg">
      <div className="flex justify-between items-center px-5 py-2"> 
        <h1 className="text-2xl font-bold flex items-center">
          <img src={IndiaFlag} alt="India" className="w-6 h-4 object-cover mr-2" />
          India<span className="text-blue-600">X</span>plore
        </h1>  

        <div className="hidden md:flex gap-5">
          <button onClick={() => navigate("/?section=home")} className="px-3 py-1 rounded font-semibold text-white hover:text-blue-500 transition-colors">
            HOME
          </button>

          <button onClick={() => navigate("/?section=destinations")} className="px-3 py-1 rounded font-semibold text-white hover:text-blue-500 transition-colors">
            DESTINATIONS
          </button>

          <button onClick={() => navigate("/?section=plantrip")} className="px-3 py-1 rounded font-semibold text-white hover:text-blue-500 transition-colors">
            PLAN TRIP
          </button>

          <button onClick={() => navigate("/wishlist")} className="px-3 py-1 rounded font-semibold text-white hover:text-blue-500 transition-colors">
            WISHLIST
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenu(!menu)} className="text-2xl focus:outline-none">
            {menu ? <FaTimes /> : <FaBars />} 
          </button>
        </div> 
      </div>

      {menu && (
        <div className="md:hidden flex flex-col gap-3 bg-black/90 px-6 py-4"> 
          <button className="px-3 py-1 rounded font-semibold text-white hover:text-blue-500 transition-colors">
            HOME
          </button>
          <button className="px-3 py-1 rounded font-semibold text-white hover:text-blue-500 transition-colors">
            DESTINATIONS
          </button>
          <button className="px-3 py-1 rounded font-semibold text-white hover:text-blue-500 transition-colors">
            PLAN TRIP
          </button>
          <button onClick={() => { navigate("/wishlist"); setMenu(false)  }} className="px-3 py-1 rounded font-semibold text-white hover:text-blue-500 transition-colors">
            WISHLIST
          </button> 
        </div>
      )}
    </nav>
  )
}

export default Navbar
