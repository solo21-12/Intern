import React, { createContext, useContext, useState, useEffect } from 'react'
const Context = createContext();
export const StateContext = ({ children }) => {
  const [show, setShow] = useState(true);

  return (
    <Context.Provider
      value={{
        show,
        setShow
      }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
