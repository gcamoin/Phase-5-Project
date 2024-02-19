import React, {useState} from "react"
import {TextField,Button,Typography,Box} from '@mui/material';;

function AddReviewForm({bookID, handleAddReview}) {
    const [content, setContent] = useState("")
    const [errors, setErrors] = useState([])
            
    
    
    function handleSubmit(e) {
        e.preventDefault();
       
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content,
                book_id: bookID
                
                }),
        })
        .then((r) => { 
            if(r.ok) {
              r.json().then((reviewToAdd) => handleAddReview(reviewToAdd));
            } else {
              r.json().then((err)=>setErrors(err.errors))
            }
  
          })
          setContent("")
        
    }


    return(
        
        <div>
          <Typography sx={{fontFamily:"cursive", textDecoration:"underline"}} color="primary" variant="h4">Leave A Review</Typography>
            
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt:5, width: 700 },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField
         value={content}
         onChange={(event) => setContent(event.target.value)}
          id="filled-multiline-flexible"
          label="Leave a review"
          multiline
          maxRows={4}
          variant="filled"
          
        />
        <br></br>
        <Button onClick={handleSubmit}>Submit Review</Button>
        </div>

    </Box>
    <p style={{color: "red"}}>{errors}</p>
    </div>
    )


}


export default AddReviewForm;