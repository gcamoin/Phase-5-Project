import {React, useState, useContext} from "react"
import {TextField,Button,Typography,Box, Grid} from '@mui/material';
import {UserContext} from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"
import {Link, useNavigate} from "react-router-dom"
import Alert from '@mui/material/Alert';

function Login({ }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const {setUser} = useContext(UserContext)
    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((r) => { 
            if(r.ok) {
              r.json().then((user) => setUser(user));
              navigate("/home")
            } else {
              r.json().then((err)=>setErrors(err.errors))
              setAlert(true)
            }
  
          })
          
      }
  
    return (
      
      <div>
          
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
              <Grid container justify="space-between">
                <Grid item xs={10} xl={1} lg={6} md={6} sm={12}>
                    <Button
                        type='submit'
                        align='center'
                        variant='contained'
                        color='primary'
                        onClick={handleSubmit}>LogIn
                    </Button>
                </Grid>
                <Grid item xs={10} xl={1} lg={6} md={6} sm={12}>
                   <Link to="/signup"><Button>Sign-Up</Button></Link>
                </Grid>
              </Grid>
                {alert && <Alert severity="error" >{errors}</Alert>}
            
        </Box>
            
        
      </div>
      
    );
  }

  export default Login;