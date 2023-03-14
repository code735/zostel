import React from 'react'
import { Routes, Route } from 'react-router'
import Destinationpage from '../Components/DESTINATION_PAGE/destinationpage'
import Home from '../Components/HOME/Home'
import Individual from '../Components/INDIVIDUAL CITY PAGE/Individual'
import Zostel from '../Components/ZOSTEL _PAGE/Zostel'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destinationpage />} />
        <Route path='/individual' element={<Individual />} />
        <Route path='/zostel' element={<Zostel />} />
      </Routes>
    </div>
  )
}
