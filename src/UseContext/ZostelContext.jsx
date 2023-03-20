import React, { createContext, useState } from 'react'


export const ZostelContext= createContext()

const ZostelContextProvider = ({children}) => {
  const [isLogin,setIsLogin]=useState(false)
  const [maincart,setMaincart]=useState([])

  return (
    <ZostelContext.Provider value={{isLogin,setIsLogin,maincart,setMaincart}} >
        {children}
    </ZostelContext.Provider>
  )
}

export default ZostelContextProvider