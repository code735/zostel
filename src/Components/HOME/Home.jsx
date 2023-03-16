import React from 'react'
import { NavLink } from 'react-router-dom'
import Slideshow from '../Slidershow'

export default function Home() {
  return (
    <div>
      <Slideshow />
      <NavLink to='/individual'>Book Now</NavLink>
    </div>
  )
}
