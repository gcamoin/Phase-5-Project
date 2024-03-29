import {React} from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


function GenreCard({genre}) {
    const { id, name, image } = genre
   

   
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
            
            <Link to={`/genres/${id}/books`}><Button size="small">Browse Books</Button></Link>
           
            </CardActions>
            </Card>
             
        </div>
    )


}


export default GenreCard;