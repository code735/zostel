import React, { createContext } from 'react'


export const Zostel= createContext()

const ZostelContextProvider = ({children}) => {
  return (
    <Zostel.Provider>
        {children}
    </Zostel.Provider>
  )
}

export default ZostelContextProvider