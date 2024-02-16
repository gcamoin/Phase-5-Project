import React, {useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import Review from "/home/gcamoin/phase-5-project/client/src/components/Review.js"

function ReviewContainer() {
    const [reviews, setReviews] = useState([])
    const {id} = useParams()
    
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
        />
      ))

      return(
        <div align="center">
            <h1>Reviews</h1>
            {reviewList}
        </div>
      )


}

export default ReviewContainer;