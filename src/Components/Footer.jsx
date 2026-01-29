import React from 'react'
import IndiaFlag from '../assets/flag.png'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white'> 
      <div className='max-w-7xl flex gap-16 flex-col md:flex-row'>
       <div className='max-w-6xl mx-6 px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        <div>
          <h3 className="font-semibold mb-3">Programs</h3> 
          <ul className="space-y-2 text-gray-400 text-sm"> 
            <li>Custom Travel Packages</li>
            <li>Solo Trips</li>
            <li>Group Tours</li>
            <li>Weekend Getaways</li> 
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Services</h3> 
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Trip Planning</li>
            <li>Hotel Booking</li>
            <li>Flight Assitance</li> 
            <li>Travel Insurance</li> 
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Home</li>
            <li>Destinations</li>
            <li>Plan Trip</li>
            <li>WishList</li>  
          </ul>
        </div>
      </div>

      <div className='mx-auto px-6 py-10 w-full max-w-md md:text-left text-center'>
        <h3 className="font-semibold mb-3">Newsletter</h3>
        <div className='flex flex-col sm:flex-row gap-2'>
         <input type="email" placeholder='Email Address' className='bg-white flex-1 text-gray-900 rounded px-4 py-1 text-left focus:outline-none focus:ring-2 focus:ring-blue-600'/>
         <button className='bg-blue-600 rounded px-4 py-1'>Subscribe</button>   
        </div> 
        <div className='flex gap-2 mt-4 justify-center md:justify-start'>
         <img src="/images/wtsp.jpg" alt="" className='w-6'/>
         <img src="/images/utube.jpg" alt="" className='w-6'/> 
         <img src="/images/insta.jpg" alt="" className='w-6'/>
         <img src="/images/facebook.jpg" alt="" className='w-6'/>
         <img src="/images/linkedin.jpg" alt="" className='w-6'/>
         <img src="/images/twitter.jpg" alt="" className='w-6'/>  
        </div>
        <h3 className='text-sm mt-1'>Mobile: +912434162943</h3>
        <h3 className='text-sm'>Email: sakshi@indiaxploreconnects.com</h3>
      </div>
      </div>
      <hr className="border-gray-400 mt-4"/>
      <div className='max-w-6xl mx-4 px-6 py-5 flex items-center justify-between flex-col md:flex-row gap-2'> 
       <h1 className="text-2xl font-bold flex items-center">
          <img src={IndiaFlag} alt="India" className="w-6 h-4 object-cover mr-2" />
          India<span className="text-blue-600">X</span>plore
       </h1> 
       <p className="text-xs text-gray-400"> 
         © 2026 IndiaXplore Connects. All rights reserved.
       </p>
      </div>
    </div>
  ) 
}

export default Footer
