import {React, useState} from "react"
import {TextField,Button,Typography,Box} from '@mui/material';


function Login({ }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
   
  
  
    return (
      
          
        <Box sx={{display: 'flex',flexDirection: 'column','& .MuiButton-root': { width: '15ch' },'& .MuiTextField-root': { width: '50ch' }}} marginLeft={80} marginTop={10} > 

        <Typography sx={{ mt: 3 }}  color='primary' variant="h5">Login</Typography>
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

                <Button
                    type='submit'
                    align='center'
                    variant='contained'
                    color='primary'
                    onClick={() => { alert('You have Successfully Loged in!') }}>LogIn
                </Button>
            

        </Box>
            
        
       
      
    );
  }

  export default Login;