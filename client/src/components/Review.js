import {React, useState} from "react"
import { Divider, Grid, Paper, Button, Avatar } from "@mui/material/";


function Review({review, handleDeleteReview, bookID, handleUpdateReview, user}) {
    const {id, content} = review
    const [errors, setErrors] = useState([])
    const [editReview, setEditReview] = useState(false)
    const [editContent, setEditContent] = useState(content)
    console.log(review.user.id)
    function handleSubmit(e) {
      e.preventDefault()
      fetch(`/reviews/${id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              content: editContent,
              book_id: bookID
              
          })
      }).then((r) => { 
         
          if(r.ok) {
            r.json().then((updatedReview) => handleUpdateReview(updatedReview));
          } else {
            r.json().then((err) =>{
              setErrors(err.errors)})
            
          }

        })
      
      setEditReview(false)
  }

    function deleteReview() {
      fetch(`/reviews/${id}`, {
          method: "DELETE",
      }).then((r) => {
          if (r.ok) {
              handleDeleteReview(review)
         
          } else {
              r.json().then((err)=>{
                  setErrors(err.error)})
          }
      });
      
  }
    
    return(
        
            <div style={{ padding: 14 }} className="App">
              <Paper style={{ padding: "40px 20px" }}>
             
                <Grid container wrap="nowrap" spacing={2}>
                
                  <Grid item>
                   <Avatar alt="Remy Sharp" src={review.user.avatar} />
                  </Grid>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>{review.user.username}</h4>
                    { editReview ? <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                />
                <button>Submit</button>
                    </form> :
                   <div>
                    <p style={{ textAlign: "left" }}>
                     {content}
                    </p>
                    </div> 
                      }
                  </Grid>
                 {user.username === review.user.username && 
                  <div>
                  <Button onClick={deleteReview}>Delete</Button>
                  <br></br>
                  <Button onClick={() => setEditReview(!editReview)}> Edit Review </Button>
                  </div>
                }
                
                
                </Grid>
                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                
                
              </Paper>
              <p style={{color: "red"}}>{errors}</p>
           
            </div>
          );
       
    
    

}

export default Review;