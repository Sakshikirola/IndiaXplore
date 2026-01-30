import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPhone } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[70vh] mb-12 relative">
        <img src="/images/about.jpg" alt="about" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40"> 
          <h3 className="text-white text-4xl md:text-6xl font-bold">About Us</h3> 
        </div> 
      </div>
 
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20 mb-12 px-4 sm:px-6 md:px-12">  
        <div>
          <h2 className='text-blue-700'>OUR INTRODUCTION</h2>
          <h3 className='text-black text-3xl md:text-5xl lg:text-6xl font-bold'>Tour & Journey Begins With Us !!</h3> 
          <p className='mt-5'>Travel is more than just moving from one place to another — it’s about discovering new cultures, creating memories, and experiencing the world in a meaningful way. We believe every journey should be simple, inspiring, and unforgettable.</p>
          <div className="mt-5 w-full max-h-125 overflow-hidden border-5 rounded-2xl">
           <img src="/images/about1.jpg" alt="about1" className="w-full h-auto"/>
          </div>
        </div> 

        <div>
          <p>Our platform is designed to help travelers explore destinations with ease. From discovering popular places to planning trips smoothly, we focus on providing a clean, user-friendly experience that makes travel planning stress-free and enjoyable.</p>
          <p className='mt-5 bg-blue-600 text-white p-6 rounded-2xl'>Whether you’re looking for peaceful escapes, exciting adventures, or well-planned itineraries, we’re here to support your travel goals. With thoughtful design, we aim to make every journey feel special.</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-1 mt-5'>
            <p><FontAwesomeIcon icon={faCircleCheck}/>Explore Beautiful Destinations.</p>
            <p><FontAwesomeIcon icon={faCircleCheck}/>Simple Trip Planning.</p>
            <p><FontAwesomeIcon icon={faCircleCheck}/>User-Friendly Interface.</p>
            <p><FontAwesomeIcon icon={faCircleCheck}/>Curated Travel Experiences.</p>
            <p><FontAwesomeIcon icon={faCircleCheck}/>Smooth Navigation Design.</p>
            <p><FontAwesomeIcon icon={faCircleCheck}/>Inspiring Travel Ideas.</p>
            <p><FontAwesomeIcon icon={faCircleCheck}/>Responsive Modern Layout.</p>
            <p><FontAwesomeIcon icon={faCircleCheck}/>Travel Made Effortless.</p>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-4 mt-5'>
            <img src="/images/varkala.jpg" alt="varkala" className='w-full lg:w-80 h-40 object-cover rounded-xl'/> 
            <img src="/images/palolem.jpg" alt="palolem" className='w-full lg:w-80 h-40 object-cover rounded-xl'/>
          </div>
          <p className='mt-5'>We focus on combining design and functionality to create a seamless travel experience. Every section of the website is thoughtfully crafted to help users find information quickly, explore destinations visually, and enjoy a smooth browsing journey across all devices.</p>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-7'>
           <button className='bg-blue-600 px-4 py-3 rounded font-bold text-white'>BOOK A TOUR</button>
           <h3 className='flex items-center'>OR</h3>
           <button className='bg-black px-4 py-3 rounded font-bold text-white'><FontAwesomeIcon icon={faPhone}/> +912434162943</button>
          </div> 
        </div> 
      </div>
    </div>
  )
}

export default About

