"use client";
import React, { createContext, useState,useEffect } from 'react'
const SessionContext=createContext();
function Sessionprovider({children}) {
    const[token,setToken]=useState(localStorage.getItem("token")||"");
    useEffect(() => {
      localStorage.setItem("token",token)
    }, [token])
    
  return (
    <SessionContext.Provider value={{token,setToken}}>
        {children}
    </SessionContext.Provider>
        
  )
}
export {SessionContext}
export default Sessionprovider

