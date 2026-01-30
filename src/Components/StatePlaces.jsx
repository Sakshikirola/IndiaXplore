import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"
import { useParams } from 'react-router-dom' 
import { states } from '../assets/assets' 

const StatePlaces = () => {  

  const { stateSlug } = useParams()  
  const state = states.find(s => s.slug === stateSlug)
  
  const [wishlist, setWishlist] = useState([]) 
  useEffect(()=>{ 
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []) 
  },[]) 

  const isInWishlist = (place) => wishlist.some(item => item.id === place.id && item.stateSlug === state.slug)

  const addToWishlist = (place) => {
   if (isInWishlist(place)) return
   const updatedWishlist = [
    ...wishlist,
    { ...place, stateName: state.name, stateSlug: state.slug }
   ] 

   setWishlist(updatedWishlist)
   localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)) 
  } 
 
  return (
    <div className="min-h-screen mt-8 px-6 py-10"> 
      <h1 className='text-4xl font-extrabold pb-2 mb-2 bg-linear-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent inline-block'>  
        {state.name} Destinations
      </h1> 

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">  
        {state.places.map(place => (   
          <div 
            key={place.id}
            className="bg-linear-to-br from-gray-800 via-gray-900 to-black rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
          > 
            <img 
              src={place.image}
              alt={place.name}
              className="w-full h-56 object-cover" 
            />

            <div className="p-4 flex flex-col grow">  
              <h2 className="text-lg font-semibold text-white">{place.name}</h2>
              <p className="text-sm text-gray-300 mt-1 mb-4">
                {place.description}
              </p>

              <div className='mt-auto flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                   {[1,2,3,4,5].map((star)=>{
                    if (place.rating >= star) { 
                      return (
                        <FontAwesomeIcon key={star} icon={faStar} className="text-amber-400"/>
                      )
                    }else if(place.rating >= star-0.5){ 
                      return(
                        <FontAwesomeIcon key={star} icon={faStarHalfAlt} className='text-amber-400'/>
                      )
                    }else{
                      return(
                        <FontAwesomeIcon key={star} icon={faStar} className='text-gray-600'/> 
                      )
                    } 
                   })}
                </div> 

                <button onClick={() => addToWishlist(place)} disabled={isInWishlist(place)} className={`px-4 py-2 rounded-xl text-sm text-white font-semibold transition
                 ${isInWishlist(place) ? "bg-gray-600 cursor-not-allowed"
                 : "bg-linear-to-r from-amber-600 to-rose-600 hover:scale-105"}`}>
                  {isInWishlist(place) ? "✔ Added to Wishlist" : "❤️ Add to Wishlist"}  
                </button>   
              </div> 
            </div>
          </div> 
        ))}
      </div>
    </div>
  )
}

export default StatePlaces
