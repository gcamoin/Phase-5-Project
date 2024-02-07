import {React, useState} from "react"
import {Typography} from '@mui/material';

function GenreCard({genre}) {
    const {genre_id, name, books} = genre

   
    return (
        <div className="genre-cards">
          
            
            <Typography sx={{ mt: 8, ml: 7, fontFamily: "cursive", textDecoration: "underline" }}  color='primary' variant="h4">{name}</Typography>
                
             
     
          
        </div>
    )


}


export default GenreCard;