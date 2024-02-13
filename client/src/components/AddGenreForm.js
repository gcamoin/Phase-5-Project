import {React, useState} from "react"
import {TextField,Button,Typography} from '@mui/material';

function AddGenreForm({handleAddGenre}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [errors, setErrors] = useState([])

    

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/genres", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                image: image
                
            }),
        })
        .then((r) => { 
            if(r.ok) {
              r.json().then((genreToAdd) => handleAddGenre(genreToAdd));
            } else {
              r.json().then((err)=>setErrors(err.errors))
            }
  
          })

          setName("")
          setImage("")
        
    }




    return (
           
        <div style={{marginBottom:70, marginLeft:350}} align="left">
            <Typography sx={{ mt: 3, ml:18, textDecoration:'underline'}}  color='primary' variant="h5">Add New Genre!</Typography>
                <TextField
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    id='name'
                    label='name'
                    type='name'
                    variant='outlined'
                    margin='normal'
                    required
                    align='left'>
                   
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
                    align='left'>
                    
                </TextField>
                <br></br>

                <Button
                    type='submit'
                    align='left'
                    variant='contained'
                    color='primary'
                    onClick={handleSubmit}>Add Genre
                </Button>
           
              

               
                {errors.map((error) => <p style={{color: "red"}}>{error}</p>)}
         </div>
      
    )


}


export default AddGenreForm;