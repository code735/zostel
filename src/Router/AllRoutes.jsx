import React from 'react'
import { Routes, Route } from 'react-router'
import Destinationpage from '../Components/DESTINATION_PAGE/destinationpage'
import Home from '../Components/HOME/Home'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destinationpage />} />
      </Routes>
    </div>
  )
}
