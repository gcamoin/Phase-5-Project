import React, {useContext} from "react"
import Login from "/home/gcamoin/phase-5-project/client/src/components/Login.js"
import SignUp from "/home/gcamoin/phase-5-project/client/src/components/SignUp.js"
import {UserContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"
import GenreContainer from "/home/gcamoin/phase-5-project/client/src/components/GenreContainer.js"
import BookContainer from "/home/gcamoin/phase-5-project/client/src/components/BookContainer.js"
import {Routes, Route} from "react-router-dom";
import AddGenreForm from "/home/gcamoin/phase-5-project/client/src/components/AddGenreForm.js"
import NavBar from "/home/gcamoin/phase-5-project/client/src/components/NavBar.js"
import ReviewContainer from "/home/gcamoin/phase-5-project/client/src/components/ReviewContainer.js"
import SearchBar from "/home/gcamoin/phase-5-project/client/src/components/SearchBar.js"
import Profile from "/home/gcamoin/phase-5-project/client/src/components/Profile.js"
import Header from "/home/gcamoin/phase-5-project/client/src/components/Header.js"

function App() {
  const {user} = useContext(UserContext)
  

  if (user) {
    return ( 
    <div className="logged-in page">
     <NavBar/>
        <Routes>
          <Route path="/genres/:id/books" element={<BookContainer/>} />
          <Route path="/books/:id/reviews" element={<ReviewContainer/>}/>
          <Route path="/home"  element={<GenreContainer/>}/>
          <Route path="/mybooks" element={<Profile user={user}/>}/>
          <Route path="/addgenre" element={<AddGenreForm/>}/>
          <Route path="/findbooks" element={<SearchBar/>} />
        </Routes>
          
    </div>
    )
  } else {
    return (
     <div className="login-page">
     
      <Header />
      <Routes> 
      <Route path="/" element={<Login/>} /> 
      <Route path="signup" element={<SignUp/>}/>
      </Routes>
      </div>
    )
  }
  
}


export default App;
