import {BookContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/BookContext.js"
import React, {useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import Review from "/home/gcamoin/phase-5-project/client/src/components/Review.js"
import AddReviewForm from "/home/gcamoin/phase-5-project/client/src/components/AddReviewForm.js"

function ReviewContainer() {
    const [reviews, setReviews] = useState([])
    const {id} = useParams()
    const {books, setBooks} = useContext(BookContext)
    useEffect(() => {
        fetch(`/books/${id}`)
        .then((r) => r.json())
        .then((data)=> {
          console.log(data.reviews)
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
        />
      ))

    

    function handleAddReview(newReview){
        setReviews([...reviews, newReview])
    }

    function handleDeleteReview(reviewToDeleteID) {
      const updatedReviews = reviews.filter((review) => reviewToDeleteID.id !== review.id)
      setReviews(updatedReviews)
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
            <h1>Reviews</h1>
            {reviewList}
            <AddReviewForm bookID={id} handleAddReview={handleAddReview} />
        </div>
      )


}

export default ReviewContainer;