import React from "react"
import {Link} from "react-router-dom"
import Logout from "/home/gcamoin/phase-5-project/client/src/components/Logout.js"
import Button from '@mui/material/Button';


    function NavBar() {
        return (
            <nav className="nav" align="left" style={{marginTop:10}} >
               
                <Logout/>
                <Link to="/"><Button>Home</Button></Link>
                <br></br>
                <Link to="/me"><Button>My Books</Button></Link>
                <br></br>
                <Link to="/addgenre"><Button>Add Genre</Button></Link>
                <br></br>
                <Link to="/findbooks"><Button>🔍 Books</Button></Link>
                
                
                
            
            </nav>
        )
    }




export default NavBar;

