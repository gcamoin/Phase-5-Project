import React from "react"
import {Typography} from '@mui/material';
import NavBar from "/home/gcamoin/phase-5-project/client/src/components/NavBar.js"

function Header() {
    return(
        <div className="header">
             <NavBar/>
             <Typography sx={{fontSize: 50, fontFamily: "cursive", mb: 30, ml: 20}} color="primary">
                Book <img src="https://media.istockphoto.com/id/1138569048/vector/cartoon-book-character.jpg?s=612x612&w=0&k=20&c=WLLYkgUI9fvzMXeF-PR4bY-bxqSr3kA0FH-EXiVzT64=" alt="logo" width="300" height="300"/> Buddy
             </Typography>
             
        </div>
    )
}



export default Header;



