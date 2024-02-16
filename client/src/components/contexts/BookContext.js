// src/context/user.js
import {useState, useEffect, createContext} from "react";

// create the context
const BookContext = createContext();

// create a provider component
function BookProvider({ children }) {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("/books").then((response) => {
          if (response.ok) {
            response.json().then((book) => setBooks(book));
          }
        });
      }, []);
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <BookContext.Provider value={{books, setBooks}}>{children}</BookContext.Provider>;
}

export { BookContext, BookProvider };