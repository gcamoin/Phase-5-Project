import {React, useState} from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
function BookCard({book}) {

    const {id, title, author, image, pages, reviews } = book


    return (
        <div className="book-card" align="center">
            <Card sx={{ maxWidth: 345, mt: 7 }} align="center">
            <Typography sx={{mb:2}} variant="h4" color="maroon" align="center" fontFamily={"cursive"} >{title}</Typography>
                <CardMedia
                    component="img"
                    alt="book image"
                    height="500"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                         {author} ✍️
                         <br></br>
                         {pages} Pages 📘
                    </Typography>
                </CardContent>

            </Card>
            
        </div>
    )


}

export default BookCard;