import React, {useState, useContext} from "react"
import Login from "/home/gcamoin/phase-5-project/client/src/components/Login.js"
import SignUp from "/home/gcamoin/phase-5-project/client/src/components/SignUp.js"
import {UserContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"
import GenreContainer from "/home/gcamoin/phase-5-project/client/src/components/GenreContainer.js"


function App() {
  const {user, setUser} = useContext(UserContext)

  if (user) {
    return ( 
    <div className="logged-in page">
     
      <GenreContainer />

      
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
