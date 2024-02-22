import {UserContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"
import React, {useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import Review from "/home/gcamoin/phase-5-project/client/src/components/Review.js"
import AddReviewForm from "/home/gcamoin/phase-5-project/client/src/components/AddReviewForm.js"
import {Typography} from '@mui/material';
import {BookContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/BookContext.js"

function ReviewContainer() {
  const {books, setBooks} = useContext(BookContext)
  const [bookReviews, setBookReviews] = useState([])
  const {setUser, user} = useContext(UserContext)
  const {id} = useParams()

  useEffect(() => {
    const book = books.find((book) => book.id === parseInt(id))
    
    if(book){
      setBookReviews(book.reviews)
    }
  }, [books]);
     
      const reviewList = bookReviews.map((review) => (
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
        setBookReviews([...bookReviews, newReview])

        const reviewedBooks = [...user.books, newReview.book]
        const userObject = {...user, books: reviewedBooks }
        setUser(userObject)
    }

    function handleDeleteReview(reviewToDeleteID) {
      const updatedReviews = bookReviews.filter((review) => reviewToDeleteID.id !== review.id)
      setBookReviews(updatedReviews)

      const reviewedBooks = user.books.filter((book) => reviewToDeleteID.book_id !== book.id)
      const userObject = {...user, books: reviewedBooks}
      setUser(userObject)
    }

    function handleUpdateReview(reviewToUpdate) {
        const updatedReview = bookReviews.map((review) => {
          if(review.id === reviewToUpdate.id) {
            return reviewToUpdate
          } else {
            return review
          }
        })
        setBookReviews(updatedReview)
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