import React from 'react'
import {states} from "../assets/assets.js"
import {useNavigate} from "react-router-dom" 

const DestinationCard = () => {

  const navigate = useNavigate();  

  return ( 
    <div className='max-w-7xl mx-auto px-6 py-12 text-center'> 

      <h1 className='text-4xl md:text-5xl font-extrabold pb-2 mb-2 bg-linear-to-r from-amber-700 via-orange-600 to-rose-600 bg-clip-text text-transparent'
       style={{textShadow:"0 4px 14px rgba(249,115,22,0.45)"}} 
      >Explore By State</h1> 
      <p className='text-gray-600 text-sm md:text-base'>Discover culture, heritage, and hidden gems across India</p>
    
      <div className='overflow-hidden mt-8'>
       <div className='flex w-max animate-slides'>  
         {[...states,...states].map((state,index)=>(     
          <div key={index}
          className='mx-3 w-75 h-95 md:h-95 bg-linear-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl shrink-0 transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10'
          >
           <img src={state.image} alt={state.name} className='w-full h-54 object-cover rounded-t-2xl'/>
           <div className='p-4 text-left'>
             <h3 className='text-xl font-bold text-white mb-1'>{state.name}</h3> 
             <p className='text-gray-300 text-sm'>Explore the beauty, culture, and landmarks of {state.name}.</p>
           </div>

           <button
           onClick={() => navigate(`/destinations/${state.slug}`)} 
           className="mt-1 px-4 py-2 rounded-xl bg-linear-to-r from-amber-600 to-rose-600 text-white text-sm font-semibold hover:scale-105 transition">
              Explore {state.name}  
           </button> 
          </div>
         ))}
       </div>
      </div>

      <style>
        {`
         @keyframes slides{
          0%{transform:translateX(0);} 
          100%{transform:translateX(-50%);}
         }

         .animate-slides{
          animation:slides 12s linear infinite; 
         }

         .animate-slides:hover {
          animation-play-state: paused; 
         }
        `}
      </style>
    </div>
  )
}

export default DestinationCard
