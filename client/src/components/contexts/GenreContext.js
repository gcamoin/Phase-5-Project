// src/context/user.js
import {useState, useEffect, createContext} from "react";

// create the context
const GenreContext = createContext();

// create a provider component
function GenreProvider({ children }) {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        fetch("/genres").then((response) => {
          if (response.ok) {
            response.json().then((genre) => setGenres(genre));
          }
        });
      }, []);
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <GenreContext.Provider value={{genres, setGenres}}>{children}</GenreContext.Provider>;
}

export { GenreContext, GenreProvider };