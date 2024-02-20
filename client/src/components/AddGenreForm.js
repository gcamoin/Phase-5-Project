import {React, useState, useContext} from "react"
import {TextField,Button,Typography} from '@mui/material';
import {GenreContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/GenreContext.js"
import Header from "/home/gcamoin/phase-5-project/client/src/components/Header.js"
import Alert from '@mui/material/Alert';


function AddGenreForm({handleAddGenre}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [errors, setErrors] = useState([])
    const {genres, setGenres} = useContext(GenreContext)
    const [alert, setAlert] = useState(false)
    
    function handleAddGenre(newGenre) {
        setGenres([...genres, newGenre])
    }
    

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
              r.json().then((genreToAdd) => handleAddGenre(genreToAdd))
              setAlert(true)
            } else {
              r.json().then((err)=>setErrors(err.errors))
            }
  
          })

          setName("")
          setImage("")
          setErrors("")
        
    }




    return (
           
        <div>
            <Header/>
            
                {alert && <Alert severity="success" >You Have Successfully Added A Genre!</Alert>}
            <div style={{marginBottom:70}} align="center">
                <Typography sx={{ mt: 3, ml:5, textDecoration:'underline'}}  color='primary' variant="h5">Add New Genre!</Typography>
                    <TextField
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        id='name'
                        label='name'
                        type='name'
                        variant='outlined'
                        margin='normal'
                        required
                        size="normal"
                        align='center'
                        helperText={errors[0]}
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
                        helperText={errors[1]}
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
                        onClick={handleSubmit}>Add Genre
                    </Button>

            
                    
                
                <div>
                <img src="https://assets-global.website-files.com/634ef78fb6faa83c8375fe5e/63783ef59d37fd25848828fe_10-books-every-leader-should-read.webp" alt="books" style={{width:900}} />
                </div>
                
                    
            </div>
        </div>
    )


}


export default AddGenreForm;