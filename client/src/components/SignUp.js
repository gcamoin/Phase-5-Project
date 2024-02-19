import {React, useState, useContext} from "react"
import {TextField,Button,Typography,Box} from '@mui/material';
import {UserContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"
import Alert from '@mui/material/Alert';

function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [email, setEmail] = useState("")
    const [profilePicture, setProfilePicture] = useState("")
    const {setUser} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const [alert, setAlert] = useState(false)
    
    

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
             username: username,
              password,
              password_confirmation: passwordConfirmation,
              email,
              avatar: profilePicture
            
            }),
        }).then((r) => { 
          if(r.ok) {
            r.json().then((user) => setUser(user));
            
          } else {
            r.json().then((err)=>setErrors(err.errors))
            
           
            setAlert(true)
           
          }

        })
        
    }

    return (
      
          
        <Box sx={{display: 'flex',flexDirection: 'column','& .MuiButton-root': { width: '15ch' },'& .MuiTextField-root': { width: '50ch' }}} marginLeft={80} marginTop={10} > 

        <Typography sx={{ mt: 3 }}  color='primary' variant="h5">Sign-Up</Typography>

        <TextField
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    id='email'
                    label='email'
                    type='email'
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    align='center'>
                </TextField>

                


                <TextField
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                    id='username'
                    label='username'
                    type='username'
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    align='center'>
                </TextField>
            

           
                <TextField
                    onBlur={(event) => (event)}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    name='password'
                    id='password'
                    label='Password'
                    type='password'
                    variant='outlined'
                    margin='normal'
                    align='center'
                    fullWidth
                    required>
                </TextField>



                <TextField
                    onBlur={(event) => (event)}
                    value={passwordConfirmation}
                    onChange={(event) => setPasswordConfirmation(event.target.value)}
                    name='password'
                    id='password'
                    label='Confirm Password'
                    type='password'
                    variant='outlined'
                    margin='normal'
                    align='center'
                    fullWidth
                    required>
                </TextField>

                <TextField
                    onChange={(event) => setProfilePicture(event.target.value)}
                    value={profilePicture}
                    id='profilePicture'
                    label='Profile Picture url (optional)'
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    align='center'>
                </TextField>

                <Button
                    type='submit'
                    align='center'
                    variant='contained'
                    color='primary'
                    onClick={handleSubmit}>SignUp
                </Button>
               {alert && <Alert severity="error" >{errors.map((error) => <p style={{color: "red"}}>{error}</p>)}</Alert>}
               

        </Box>
            
        
       
      
    );


}

export default SignUp;