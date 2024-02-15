import React, {useState} from "react"
import {TextField,Button,Typography} from '@mui/material';
import Grid from '@mui/material/Grid';

function Search(){
    const [search, setSearch] = useState("")

    return(
        <div style={{marginBottom:50}} align="center">
            <Typography sx={{ mt: 3, ml:5, mb:3, textDecoration:'underline'}}  color='primary' variant="h5">Find a Book</Typography>
            
                <TextField
                    onChange={(event) => setSearch(event.target.value)}
                    value={search}
                    id='search'
                    label='search'
                    type='search'
                    variant='outlined'
                    margin='normal'
                    required
                    align='right'
                    sx={{width:300}}
                    >
                   
                </TextField>
                <br></br>

                <Button
                    type='submit'
                    align='left'
                    variant='outlined'
                    color='primary'
                    sx={{height:60, width:80, fontSize:"larger"}}
                    >🔎
                </Button>
            
           
        </div>
    )
}

export default Search