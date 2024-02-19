import React from "react"
import {Typography, Card, CardMedia, CardContent} from '@mui/material';

function Profile({user}) {
    
      return (
        <div className="my-books" align="center">
            <Typography sx={{fontFamily:"cursive", textDecoration:"underline", mt:15}} variant="h3" color="primary">My Books</Typography>
            {user.books?.map((myBooks) => (
                <Card sx={{ maxWidth: 350, mt: 5, mb:7, ml:10 }} align="center">
                    <CardMedia
                        component="img"
                        alt="book image"
                        height="500"
                        image={myBooks.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {myBooks.author} ✍️
                            <br></br>
                            {myBooks.pages} Pages 📘
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
      )

}

export default Profile;