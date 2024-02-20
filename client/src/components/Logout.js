import React,{useContext} from "react"
import {UserContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"
import Button from '@mui/material/Button';
import {Link, useNavigate} from "react-router-dom"

function Logout({}) {
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
          navigate("/")
        }
      });
    }

    return (
    <div className="logout">
      <Link to="/login">  
        <Button onClick={handleLogoutClick}>
          Logout
        </Button>
      </Link>  
    </div>
    )
}
  

export default Logout;