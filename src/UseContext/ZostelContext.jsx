import React, { createContext, useState } from 'react'


export const ZostelContext= createContext()

const ZostelContextProvider = ({children}) => {
  const [isLogin,setIsLogin]=useState(false)
  const [maincart,setMaincart]=useState([])
  const [startdate,setStartdate]=useState("")
  const [enddate,setEnddate]=useState("")
  const [cartprice,setCartPrice]=useState(0)
  const [reserved,setReserved]=useState([])

  return (
    <ZostelContext.Provider value={{reserved,setReserved,cartprice,setCartPrice,isLogin,setIsLogin,maincart,setMaincart,enddate,setEnddate,startdate,setStartdate}} >
        {children}
    </ZostelContext.Provider>
  )
}

export default ZostelContextProvider