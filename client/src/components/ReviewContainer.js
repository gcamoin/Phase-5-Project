import {UserContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"
import {BookContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/BookContext.js"
import React, {useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import Review from "/home/gcamoin/phase-5-project/client/src/components/Review.js"
import AddReviewForm from "/home/gcamoin/phase-5-project/client/src/components/AddReviewForm.js"
import {Typography} from '@mui/material';


function ReviewContainer() {
    
    const {setUser, user} = useContext(UserContext)
    const {books, setBooks} = useContext(BookContext)
    const [reviews, setReviews] = useState([])
    const {id} = useParams()
    

    useEffect(() => {

      const book = books.find((book) => book.id === parseInt(id))
        // debugger
        console.log(book)
        if(book){
        setReviews(book.reviews)
    }
        // fetch(`/books/${id}`)
        // .then((r) => r.json())
        // .then((data)=> {
        // setReviews(data.reviews)
          
        // })


      }, [books, id]);
     
      const reviewList = reviews.map((review) => (
        <Review
            key={review.id}
            review={review}
            handleDeleteReview={handleDeleteReview}
            handleUpdateReview={handleUpdateReview}
            bookID={id}
            user={user}
        />
      ))

    

    function handleAddReview(newReview){
        
      const updatedBooks = books.map((book) => {
        if(book.id === newReview.book_id) {
          const updatedReviews = [...book.reviews, newReview]
          const updatedBook = {...book, reviews: updatedReviews}
          return updatedBook
        } else {
          return book
        }
      })

        setBooks(updatedBooks)

          const reviewedBooks = [...user.books, newReview.book]
          const userObject = {...user, books: reviewedBooks }
          setUser(userObject)
    }

    function handleDeleteReview(reviewToDeleteID) {
      const updatedReviews = reviews.filter((review) => reviewToDeleteID.id !== review.id)
      setReviews(updatedReviews)

      const reviewedBooks = user.books.filter((book) => reviewToDeleteID.book_id !== book.id)
      const userObject = {...user, books: reviewedBooks}
      setUser(userObject)
    }

    function handleUpdateReview(reviewToUpdate) {
        const updatedReview = reviews.map((review) => {
          if(review.id === reviewToUpdate.id) {
            return reviewToUpdate
          } else {
            return review
          }
        })
        setReviews(updatedReview)
    }

      return(
        <div align="center">
            <Typography sx={{fontFamily:"cursive", textDecoration:"underline"}} variant="h3" color="primary">Reviews</Typography>
            {reviewList}
            <AddReviewForm bookID={id} handleAddReview={handleAddReview} />
        </div>
      )


}

export default ReviewContainer;