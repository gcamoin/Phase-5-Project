import {React, useState} from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function BookCard({book}) {

    const {id, title, author, image, reviews } = book


    return (
        <div className="book-card">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="book image"
                    height="500"
                    image={image}
                />
                {title}

            </Card>
            
        </div>
    )


}

export default BookCard;