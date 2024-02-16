import React, {useState, useEffect, useContext} from "react"
import BookCard from "/home/gcamoin/phase-5-project/client/src/components/BookCard.js"
import {GenreContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/GenreContext.js"
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import AddBookForm from "/home/gcamoin/phase-5-project/client/src/components/AddBookForm.js"

function BookContainer(){
    const [books, setBooks] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        fetch(`/genres/${id}`)
        .then((r) => r.json())
        .then((data)=> {
          console.log(data)
          setBooks(data.books)
        })
      }, []);

      function handleAddBook(newBook) {
        setBooks([...books, newBook])
    }

      const bookList = books?.map((book) => (
        <BookCard
            key={book.id}
            book={book}
        />
      ))

  
      return(
        <div align="center">
          <AddBookForm />
           <Grid container xs={8} >
            {bookList}
          </Grid>
        </div>

      )

}

export default BookContainer