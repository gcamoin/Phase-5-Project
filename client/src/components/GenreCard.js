import {React, useState} from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import BookCard from "/home/gcamoin/phase-5-project/client/src/components/BookCard.js"
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function GenreCard({genre}) {
    const {genre_id, name, books} = genre

    // const bookList = books?.map((book) => (
    //     <BookCard 
    //         key={book.id}
    //         book={book}
        
    //     />
    // ))

   
    return (
        <div className="genre-cards">
          
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Browse Books</Button>
            
            </CardActions>
            </Card>
            {/* <Typography sx={{ mt: 8, fontFamily: "fantasy", textDecoration: "underline" }}  color='primary' variant="h4" align="center">{name}</Typography>
             {bookList}    */}
             
             {/* {bookList} */}
          
        </div>
    )


}


export default GenreCard;