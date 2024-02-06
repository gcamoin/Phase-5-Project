import React from "react"
import Login from "/home/gcamoin/phase-5-project/client/src/components/Login.js"
import SignUp from "/home/gcamoin/phase-5-project/client/src/components/SignUp.js"
import { UserContext } from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"

function App() {
  return (
    <div className="App">

      <Login />
      <br></br>
      <SignUp />
      
    </div>
  );
}

export default App;
