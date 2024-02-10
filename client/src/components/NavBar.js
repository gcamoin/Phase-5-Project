import React from "react"
import {Link} from "react-router-dom"
import Logout from "/home/gcamoin/phase-5-project/client/src/components/Logout.js"
import Button from '@mui/material/Button';


    function NavBar() {
        return (
            <nav className="nav" align="left" style={{marginTop:10}} >
               
                <Logout/>
                <Link to="/"><Button>Home</Button></Link>
                
                
            
            </nav>
        )
    }




export default NavBar;
