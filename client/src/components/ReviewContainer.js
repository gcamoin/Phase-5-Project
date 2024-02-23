import {UserContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"
import React, {useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import Review from "/home/gcamoin/phase-5-project/client/src/components/Review.js"
import AddReviewForm from "/home/gcamoin/phase-5-project/client/src/components/AddReviewForm.js"
import {Typography} from '@mui/material';
function ReviewContainer() {
    const [reviews, setReviews] = useState([])
    const {id} = useParams()
    const {setUser, user} = useContext(UserContext)

    useEffect(() => {
        fetch(`/books/${id}`)
        .then((r) => r.json())
        .then((data)=> {
        setReviews(data.reviews)
          
        })
      }, []);
     
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
        setReviews([...reviews, newReview])

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