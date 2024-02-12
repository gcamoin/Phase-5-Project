import {React, useState} from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import BookCard from "/home/gcamoin/phase-5-project/client/src/components/BookCard.js"
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import BookContainer from "/home/gcamoin/phase-5-project/client/src/components/BookContainer.js"


function GenreCard({genre}) {
    const {id, name, image, books} = genre
    
    
    // const bookList = books?.map((book) => (
    //     <BookCard 
    //         key={book.id}
    //         book={book}
        
    //     />
    // ))

   
    function handleBrowseBooks(){
        fetch(`/genres/${id}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
    }


   

   
    return (
        <div className="genre-cards">
       
            
          <Card sx={{ maxWidth: 375, mb: 10, ml: 5 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={image}
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
                <Button size="small" onClick={handleBrowseBooks}>Browse Books</Button>
            
            </CardActions>
            </Card>
            
            
            
            
           
          
        </div>
    )


}


export default GenreCard;