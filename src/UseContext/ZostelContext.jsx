import React, { createContext, useState } from 'react'


export const ZostelContext= createContext()

const ZostelContextProvider = ({children}) => {
  const [isLogin,setIsLogin]=useState(false)

  return (
    <ZostelContext.Provider value={{isLogin,setIsLogin}} >
        {children}
    </ZostelContext.Provider>
  )
}

export default ZostelContextProvider