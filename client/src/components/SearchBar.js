import React, {useState, useContext} from "react"
import {TextField,Button,Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import {BookContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/BookContext.js"
import FilteredBooksCard from "/home/gcamoin/phase-5-project/client/src/components/FilteredBooksCard.js"


function SearchBar({}){
    const [input, setInput] = useState("")
    const [searchedBooks, setSearchedBooks] = useState([])
    const {books, setBooks} = useContext(BookContext)
    
    const fetchData = (value) => {
        fetch("/books").then((response) => response.json()).then(json => {
            const results = json.filter((book) => {
                return value && book && book.title && book.title.toLowerCase().includes(value)
            });
            setSearchedBooks(results)
        })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    
    const filteredBooks = searchedBooks?.map((searchedBook) => (

        <FilteredBooksCard 
          key={searchedBook.id}
          searchedBook={searchedBook}
        />
      ))
    

    return(
        <div style={{marginBottom:50}} align="center">
            <Typography sx={{ mt: 3, ml:5, mb:3, textDecoration:'underline'}}  color='primary' variant="h5">Find a Book</Typography>
            
                <TextField
                    onChange={(event) => handleChange(event.target.value)}
                    value={input}
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

                <div>
                    <Grid container xs={8}>
                        {filteredBooks}
                    </Grid>
                </div>
            
           
        </div>
    )
}

export default SearchBar;