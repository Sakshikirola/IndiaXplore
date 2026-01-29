import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalfAlt, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const WishList = () => {
  
  const [wishlist, setWishlist] = useState([])   

  useEffect(()=>{
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || []
    setWishlist(storedWishlist) 
  },[]) 

  const removeWishlist = (id,stateSlug) =>{
    const updateWishlist = wishlist.filter(item => !(item.id === id && item.stateSlug === stateSlug))
    setWishlist(updateWishlist)
    localStorage.setItem("wishlist",JSON.stringify(updateWishlist)) 
  }

  if(wishlist.length === 0){ 
    return(
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4"> 
         <h2 className="text-3xl font-bold text-gray-300 mb-2">Your Wishlist is Empty ?</h2> 
         <p className="text-gray-400"> Start adding destinations you dream of visiting🌍</p> 
        </div> 
    )
  }

  return (
    <div className="min-h-screen mt-8 px-6 py-10">
      <h1 className="text-4xl font-extrabold mb-6 bg-linear-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent leading-snug inline-block">
        My Wishlist
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map(place => (
          <div
            key={place.id}
            className="bg-linear-to-br from-gray-800 via-gray-900 to-black rounded-xl overflow-hidden shadow-lg flex flex-col"
          >
            <img src={place.image} alt={place.name} className="w-full h-52 object-cover"/>

            <div className="p-4 flex flex-col grow">
              <h2 className="text-lg font-semibold text-white">{place.name}</h2>
              <p className="text-sm text-gray-400 mb-1">{place.stateName}</p>
              <p className="text-sm text-gray-300 mb-4">{place.description}</p>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(star => {
                    if (place.rating >= star) {
                      return (
                        <FontAwesomeIcon key={star} icon={faStar} className="text-amber-400"/>
                      )
                    } else if (place.rating >= star - 0.5) {
                      return (
                        <FontAwesomeIcon key={star} icon={faStarHalfAlt} className="text-amber-400"/>
                      )
                    } else {
                      return (
                        <FontAwesomeIcon key={star} icon={faStar} className="text-gray-600"/>
                      )
                    }
                  })}
                </div>

                <button
                  onClick={() => removeWishlist(place.id, place.stateSlug)}
                  className="px-3 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700 transition flex items-center gap-2"
                >
                 <FontAwesomeIcon icon={faTrash} />
                  Remove 
                </button>
              </div>

              <Link
                to={`/destinations/${place.stateSlug}`}
                className="mt-4 text-sm text-amber-400 hover:underline" 
              >
                View in {place.stateName}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WishList
