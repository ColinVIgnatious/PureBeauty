"use client";
import React, { createContext, useState, useEffect } from 'react';

const SessionContext = createContext();

function SessionProvider({ children }) {
  const [token, setToken] = useState(() => {
    // Check if localStorage is available
    if (typeof window !== 'undefined') {
      return localStorage.getItem("token") || "";
    } else {
      return "";
    }
  });

  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== 'undefined') {
      localStorage.setItem("token", token);
    }
  }, [token]);

  return (
    <SessionContext.Provider value={{ token, setToken }}>
      {children}
    </SessionContext.Provider>
  );
}

export { SessionContext };
export default SessionProvider;


