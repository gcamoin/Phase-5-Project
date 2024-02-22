import {React} from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function BookCard({book}) {
    
    const {id, author, image, pages} = book

    return (
        <div className="book-card" align="center">
            <Card sx={{ maxWidth: 350, mt: 5, mb:7, ml:10 }} align="center">
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
                <CardActions>
            
                <Link to={`/books/${id}/reviews`}><Button size="small">See Reviews</Button></Link>
           
            </CardActions>

            </Card>
            
        </div>
    )


}

export default BookCard;