import {React, useState} from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import BookCard from "/home/gcamoin/phase-5-project/client/src/components/BookCard.js"
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import BookContainer from "/home/gcamoin/phase-5-project/client/src/components/BookContainer.js"
import { Routes, Route, Link } from "react-router-dom";


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
                sx={{ height: 250, width:400 }}
                image={image}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                
            </CardContent>
            <CardActions>
            
            <Link to={`/genre/${name}`}><Button size="small" onClick={handleBrowseBooks}>Browse Books</Button></Link>
           
            </CardActions>
            </Card>
            
            <Routes>
            <Route path={`/genre/${name}`} element={<BookContainer genre={genre}/>} />
            </Routes>
            
            
            
           
          
        </div>
    )


}


export default GenreCard;