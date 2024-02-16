import React, {useState, useContext} from "react"
import Login from "/home/gcamoin/phase-5-project/client/src/components/Login.js"
import SignUp from "/home/gcamoin/phase-5-project/client/src/components/SignUp.js"
import {UserContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"
import GenreContainer from "/home/gcamoin/phase-5-project/client/src/components/GenreContainer.js"
import BookContainer from "/home/gcamoin/phase-5-project/client/src/components/BookContainer.js"
import { Router, Routes, Route } from "react-router-dom";
import AddGenreForm from "/home/gcamoin/phase-5-project/client/src/components/AddGenreForm.js"
import NavBar from "/home/gcamoin/phase-5-project/client/src/components/NavBar.js"
import ReviewContainer from "/home/gcamoin/phase-5-project/client/src/components/ReviewContainer.js"

function App() {
  const {user, setUser} = useContext(UserContext)
 

  if (user) {
    return ( 
    <div className="logged-in page">
     <NavBar/>
        <Routes>
          
          <Route path="/genres/:id" element={<BookContainer/>} />
          <Route path="/books/:id" element={<ReviewContainer/>}/>
          <Route path="/"  element={<GenreContainer/>}/>
            
          <Route path="addgenre" element={<AddGenreForm/>}/>
        </Routes>
      

      
    </div>
    )
  } else {
    return (
     <div className="login-page">
     
      <Login  /> 
      <br></br> 
      <SignUp />
      </div>
    )
  }
  
}

export default App;
