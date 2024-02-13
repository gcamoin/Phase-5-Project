// // src/context/user.js
// import {useState, useEffect, createContext} from "react";

// // create the context
// const GenreContext = createContext();

// // create a provider component
// function GenreProvider({ children }) {
//     const [genre, setGenre] = useState([]);
//     const {id} = genre
//     useEffect(() => {
//         fetch(`/genre/${id}`).then((response) => {
//           if (response.ok) {
//             response.json().then((genre) => setGenre(genre));
//           }
//         });
//       }, []);
//   // the value prop of the provider will be our context data
//   // this value will be available to child components of this provider
//   return <GenreContext.Provider value={{genre, setGenre}}>{children}</GenreContext.Provider>;
// }

// export { GenreContext, GenreProvider };