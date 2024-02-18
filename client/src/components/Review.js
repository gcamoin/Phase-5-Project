import {React, useState} from "react"
import { Divider, Grid, Paper, Button } from "@mui/material/";


function Review({review, handleDeleteReview}) {
    const {id, content} = review
    const [errors, setErrors] = useState([])

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
                    {/* <Avatar alt="Remy Sharp" src={imgLink} /> */}
                  </Grid>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>{review.user.username}</h4>
                    <p style={{ textAlign: "left" }}>
                     {content}
                    </p>
                    
                  </Grid>
                  <Button onClick={deleteReview}>Delete</Button>
                </Grid>
                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                
                
              </Paper>
              <p style={{color: "red"}}>{errors}</p>
           
            </div>
          );
       
    
    

}

export default Review;