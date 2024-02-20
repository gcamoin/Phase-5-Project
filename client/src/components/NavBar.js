import React from "react"
import {Link} from "react-router-dom"
import Logout from "/home/gcamoin/phase-5-project/client/src/components/Logout.js"
import Button from '@mui/material/Button';


    function NavBar() {
        return (
            <div>
                <nav className="nav-right" align="right" style={{marginTop:10, marginRight:10}}>
                    <Logout/>
                </nav>
                <nav className="nav-left" align="left" style={{marginLeft:5}} >
                    <Link to="/home"><Button>Home</Button></Link>
                    <br></br>
                    <Link to="/me"><Button>My Books</Button></Link>
                    <br></br>
                    <Link to="/addgenre"><Button>Add Genre</Button></Link>
                    <br></br>
                    <Link to="/findbooks"><Button>🔍 Books</Button></Link>
                </nav>
               

            </div>
        )
    }




export default NavBar;

