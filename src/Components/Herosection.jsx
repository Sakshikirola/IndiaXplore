import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import first from '../assets/hero1.jpg'
import sec from '../assets/hero2.webp'
import third from '../assets/hero3.jpg'
import four from '../assets/hero4.jpg' 

const Herosection = () => {  
  const sliderRef = useRef(null) 

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' })
  const scrollRight = () => sliderRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' }) 

  return (
    <section className="relative w-full h-screen"> 
      <div ref={sliderRef} className="flex h-full w-full overflow-x-auto scroll-smooth snap-x snap-mandatory">
        <img src={first} alt="" className="min-w-full h-full object-cover snap-start" />
        <img src={sec} alt="" className="min-w-full h-full object-cover snap-start" />
        <img src={third} alt="" className="min-w-full h-full object-cover snap-start" />
        <img src={four} alt="" className="min-w-full h-full object-cover snap-start" />
      </div>  

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/30 px-4">
        <div className="text-center text-white max-w-3xl mb-8"> 
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Incredible India</h1>
          <p className="text-base md:text-lg mb-6">Discover destinations, plan trips, and create unforgettable memories.</p>
        </div>  

        <div className="w-full max-w-3xl flex flex-col md:flex-row gap-3 md:gap-4 items-center">
          <input 
            type="text"
            placeholder="Search for a city or state"
            className="flex-1 px-4 py-3 rounded-md border border-white/40 bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          /> 
          <select className="px-4 py-3 rounded-md border border-white/40 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
            <option className='text-black'>All States</option>
            <option className='text-black'>Rajasthan</option>
            <option className='text-black'>Kerala</option>
            <option className='text-black'>Goa</option>
            <option className='text-black'>Himachal Pradesh</option>
            <option className='text-black'>Uttrakhand</option> 
            <option className='text-black'>Maharashtra</option> 
          </select>
          <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">
            Search
          </button>
        </div>
      </div> 

      <button onClick={scrollLeft} className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/70 text-white p-3 rounded-full">
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </button>
      <button onClick={scrollRight} className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/70 text-white p-3 rounded-full">
        <FontAwesomeIcon icon={faChevronRight} size="lg" /> 
      </button>
    </section>
  )
}

export default Herosection
