import React, {useState, useEffect, useContext} from "react"
import BookCard from "/home/gcamoin/phase-5-project/client/src/components/BookCard.js"
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import AddBookForm from "/home/gcamoin/phase-5-project/client/src/components/AddBookForm.js"
import {GenreContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/GenreContext.js"
import {BookContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/BookContext.js"

function BookContainer(){
  
  const {genres ,setGenres} = useContext(GenreContext)
  const {books, setBooks} = useContext(BookContext)
  const [genreBooks, setGenreBooks] = useState([])
  const {id} = useParams()
 
  useEffect(() => {
    const genre = genres.find((genre) => genre.id === parseInt(id))
    
    if(genre){
      setGenreBooks(genre.books)
    }
  }, [genres]);
    

  const handleAddBook = (newBook) =>  {
        setGenreBooks([...genreBooks, newBook])
        
  }


  const bookList = genreBooks?.map((book) => (
        <BookCard
            key={book.id}
            book={book}
        />
      ))

  
      return(
        <div align="center">
          <AddBookForm handleAddBook={handleAddBook} genreID={id} />
           <Grid container xs={8} >
            
            {bookList}
          </Grid>
        </div>

      )

}

export default BookContainer;