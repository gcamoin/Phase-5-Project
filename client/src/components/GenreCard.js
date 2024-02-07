import {React, useState} from "react"
import {Typography} from '@mui/material';
import BookCard from "/home/gcamoin/phase-5-project/client/src/components/BookCard.js"

function GenreCard({genre}) {
    const {genre_id, name, books} = genre

    const bookList = books?.map((book) => (
        <BookCard 
            key={book.id}
            book={book}
        
        />
    ))

   
    return (
        <div className="genre-cards">
          
            
            <Typography sx={{ mt: 8, ml: 7, fontFamily: "cursive", textDecoration: "underline" }}  color='primary' variant="h4">{name}</Typography>
             {bookList}   
             
     
          
        </div>
    )


}


export default GenreCard;