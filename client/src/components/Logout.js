import React,{useContext} from "react"
import {UserContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"
import Button from '@mui/material/Button';

function Logout({}) {
    const {setUser} = useContext(UserContext)
    
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

    return (
    <div className="logout">
        
      <Button onClick={handleLogoutClick}>
        Logout
      </Button>
        
    </div>
    )
}
  

export default Logout;