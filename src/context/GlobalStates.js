import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [lyrics, setLyrics] = useState("");

  return (
    <GlobalContext.Provider value={{ searchResults, lyrics, setSearchResults, setLyrics }}>
      {children}
    </GlobalContext.Provider>
  );
};