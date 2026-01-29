import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Herosection from './Herosection'
import DestinationCard from './DestinationCard'
import PlanTrip from './PlanTrip'

const Home = () => {
  const { search } = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(search)
    const section = params.get("section")

    if (section) {
      document.getElementById(section)?.scrollIntoView()  
    }
  }, [search])

  return (
    <div>
      <div id="home"> <Herosection /> </div>
      <div id="destinations"> <DestinationCard /> </div>
      <div id="plantrip"> <PlanTrip /> </div>
    </div> 
  )
}

export default Home

