import React,{useState} from "react"
import {TextField,Button,Typography} from '@mui/material';

function AddBookForm({genreID, handleAddBook}) {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pageCount, setPageCount] = useState("")
    const [image, setImage] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                author: author,
                image: image,
                pages: pageCount,
                genre_id: genreID
                
            }),
        })
        .then((r) => { 
            if(r.ok) {
              r.json().then((bookToAdd) => handleAddBook(bookToAdd));
            } else {
              r.json().then((err)=>setErrors(err.errors))
             
            }
  
          })

          setTitle("")
          setAuthor("")
          setImage("")
          setPageCount("")
        // .then((r) => r.json())
        // .then((bookToAdd) => handleAddBook(bookToAdd))
        
    }


    return (
           
        <div style={{marginBottom:70}} align="center">
            <Typography sx={{ mt: 10, ml:5, textDecoration:'underline'}}  color='primary' variant="h5">Add New Book</Typography>
                <TextField
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                    id='title'
                    label='book title'
                    type='name'
                    variant='outlined'
                    margin='normal'
                    required
                    size="normal"
                    align='center'
                    sx={{width:300}}
                    >
                   
                </TextField>

                <TextField
                    onChange={(event) => setAuthor(event.target.value)}
                    value={author}
                    id='author'
                    label='author'
                    type='name'
                    variant='outlined'
                    margin='normal'
                    required
                    size="normal"
                    align='left'
                    sx={{width:300}}
                    >

                </TextField>

                <TextField
                    onChange={(event) => setPageCount(event.target.value)}
                    value={pageCount}
                    id='page-count'
                    label='# of pages'
                    type='name'
                    variant='outlined'
                    margin='normal'
                    required
                    size="normal"
                    align='left'
                    sx={{width:300}}
                    >

                </TextField>

                <TextField
                    onChange={(event) => setImage(event.target.value)}
                    value={image}
                    id='image'
                    label='image'
                    type='name'
                    variant='outlined'
                    margin='normal'
                    required
                    size="normal"
                    align='left'
                    sx={{width:300}}
                    >
                    
                </TextField>
                <br></br>

                <Button
                    sx={{marginBottom:10}}
                    type='submit'
                    align='left'
                    variant='contained'
                    color='primary'
                    onClick={handleSubmit}>Add Book
                </Button>

           
                <div>
                {errors.map((error) => <p style={{color: "red"}}>{error}</p>)}
                </div>
               
                
         </div>
      
    )

}



export default AddBookForm