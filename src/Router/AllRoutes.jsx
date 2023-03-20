import { Text } from '@chakra-ui/react'
import React from 'react'
import { Routes, Route } from 'react-router'
import Destinationpage from '../Components/DESTINATION_PAGE/destinationpage'
import Home from '../Components/HOME/Home'
import Individual from '../Components/INDIVIDUAL CITY PAGE/Individual'
import Login from '../Components/LOGIN_SIGNUP_PAGE/Login'
import Payment from '../Components/PAYMENT_PAGE/Payment'
import PaymentSucces from '../Components/PAYMENT_PAGE/PaymentSucces'
import Profile from '../Components/Profile/Profile'
import Zostel from '../Components/ZOSTEL _PAGE/Zostel'
import IsAuthPrivateRoute from '../UseContext/IsAuthPrivateRoute'
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destinationpage />} />
        <Route path='/destination/:city' element={<Individual />} />
        <Route path='/destination/:city/:slug' element={<Zostel />} />
        <Route path='/profile' element={<Profile />} />
        {/* <Route path='/login' element={<IsAuthPrivateRoute><Profile /></IsAuthPrivateRoute>} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/payment' element={<IsAuthPrivateRoute><Payment /></IsAuthPrivateRoute>} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/*' element={<Text bg={"red.700"} fontSize="5xl">404 Not Found</Text>} />
        <Route path='/success' element={<PaymentSucces />} />
      </Routes>
    </div>
  )
}
