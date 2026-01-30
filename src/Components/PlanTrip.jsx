import React, { useState } from 'react'
import { states } from '../assets/assets'

const PlanTrip = () => {

  const [selectState,setSelectState] = useState(null) 
  const [selectPlace,setSelectPlace] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [price, setPrice] = useState('') 

  const handleStateChange=(e)=>{
    const stateName = e.target.value 
    const foundState = states.find(state => state.name === stateName)   

    setSelectState(foundState)  
    setSelectPlace('') 
  }

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-12 text-center">

      <h1 className="text-3xl md:text-4xl font-extrabold pb-2 bg-linear-to-r from-blue-900 via-indigo-800 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_8px_24px_rgba(30,64,175,0.45)]">
        Choose Your Best Destination
      </h1>
      <p className="text-gray-600 text-sm md:text-base">
        Discover beautiful places, plan unforgettable journeys, and travel your way.
      </p> 

    <div className="max-w-7xl mx-auto mt-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white items-stretch">
    
    <div className="h-[40vh] sm:h-[50vh] lg:h-[70vh]">
      <img
        src="/images/trip.jpg"
        alt="Travel"
        className="w-full h-full object-cover brightness-95"
      />
    </div>

    <div className="bg-linear-to-r from-blue-900 via-indigo-800 to-blue-600 shadow-xl shadow-blue-900/30 p-5 sm:p-8 lg:p-10
 h-full flex items-center"> 
      <form className='w-full flex flex-col justify-between'> 
            <div className='grid grid-cols-2 gap-4'> 
              <div>
                <label className='text-sm font-semibold uppercase tracking-wide text-white'>State</label>
                <select onChange={handleStateChange} className={`w-full mt-1 border border-white rounded-md px-3 py-3 focus:ring-2 focus:ring-white
               ${selectState ? 'text-white' : 'text-gray-400'}`}> 
                   <option value="" className='text-gray-400'>Select State</option> 
                   {states.map((state)=>(
                    <option key={state.id} value={state.name} className='text-black'>{state.name}</option>
                   ))}
                </select> 
              </div> 

              <div>
                <label className='text-sm font-semibold uppercase tracking-wide text-white'>Place</label>
                <select value={selectPlace} 
                 onChange={(e)=>setSelectPlace(e.target.value)} disabled={!selectState}
                 className={`w-full mt-1 border border-white rounded-md px-3 py-3 focus:ring-2 focus:ring-white
               ${selectPlace ? 'text-white' : 'text-gray-400'}`} 
                >
                  <option value="" className='text-gray-400'>Select Place</option> 
                  {selectState?.places.map((place)=>(
                    <option key={place.id} value={place.name} className='text-black'>
                      {place.name} 
                    </option>  
                  ))}
                </select>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mt-5'>
              <div>
                <label className='text-sm font-semibold uppercase tracking-wide text-white'>Start Date</label>
                <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)} 
                className={`w-full mt-1 border border-white rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-white ${startDate ? 'text-white' : 'text-gray-400'}`}
                /> 
              </div> 
              <div>
                <label className='text-sm font-semibold uppercase tracking-wide text-white'>End Date</label> 
                <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)} 
                className={`w-full mt-1 border border-white rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-white ${endDate ? 'text-white' : 'text-gray-400'}`}
                /> 
              </div> 
            </div>

            <div className='grid grid-cols-2 gap-6 items-end mt-5'>  
              <div>
                <label className='text-sm font-semibold uppercase tracking-wide text-white'>Budget</label>
                <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='₹ Amount'
                className={`w-full mt-1 border border-white rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-white ${price ? 'text-white' : 'text-gray-400'}`}
                />
              </div> 

              <button
                type="button"
                className="w-full bg-white text-blue-900 font-bold py-3 rounded-xl shadow-lg hover:bg-blue-100 hover:scale-[1.02] transition-all duration-300" 
              >
                Book Now
              </button> 
            </div> 
          </form>
    </div>

  </div>
</div>
      
    </div>
  ) 
}

export default PlanTrip
