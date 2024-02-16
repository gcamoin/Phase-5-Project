import {React, useState} from "react"


function Review({review}) {
    const {content} = review
    
    return(
        <div className="reviews">
           <ol><p style={{fontSize:30}}>{content}</p></ol> -<span>{review.user.username}</span>
        </div>
    )
    

}

export default Review;