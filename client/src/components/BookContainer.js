import React, {useState, useEffect, useContext} from "react"
import BookCard from "/home/gcamoin/phase-5-project/client/src/components/BookCard.js"
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import AddBookForm from "/home/gcamoin/phase-5-project/client/src/components/AddBookForm.js"
import {GenreContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/GenreContext.js"


function BookContainer(){
 
  const {genres ,setGenres} = useContext(GenreContext)
  const [genreBooks, setGenreBooks] = useState([])
  const {id} = useParams()
 
  useEffect(() => {
    const genre = genres.find((genre) => genre.id === parseInt(id))
    
    if(genre){
      setGenreBooks(genre.books)
    }
  }, [genres, id]);
    
  // function handleAddReview(newReview){
  //   setReviews([...reviews, newReview])

  //   const reviewedBooks = [...user.books, newReview.book]
  //   const userObject = {...user, books: reviewedBooks }
  //   setUser(userObject)

      const handleAddBook = (newBook) =>  {
        const updatedGenres = genres.map((genre) => {
          if(genre.id === newBook.genre_id) {
            const updatedBooks = [...genre.books, newBook]
            const updatedGenre = {...genre, books: updatedBooks}
            return updatedGenre
          } else {
            return genre
          }
        })
        setGenres(updatedGenres)
  }


  const bookList = genreBooks?.map((book) => (
        <BookCard
            key={book.id}
            book={book}
        />
      ))

  
      return (
        <div align="center">
          <AddBookForm handleAddBook={handleAddBook} genreID={id} />
           <Grid container xs={8} >
            
            {bookList}
          </Grid>
        </div>

      )

}

export default BookContainer;