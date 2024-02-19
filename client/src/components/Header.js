import React from "react"
import {Typography} from '@mui/material';


function Header() {
    return(
        <div className="header">
           
             <Typography sx={{fontSize: 50, fontFamily: "cursive", mb: 10}} color="primary">
                Book <img src="https://media.istockphoto.com/id/1138569048/vector/cartoon-book-character.jpg?s=612x612&w=0&k=20&c=WLLYkgUI9fvzMXeF-PR4bY-bxqSr3kA0FH-EXiVzT64=" alt="logo" width="300" height="300"/> Buddy
             </Typography>
             
        </div>
    )
}



export default Header;



