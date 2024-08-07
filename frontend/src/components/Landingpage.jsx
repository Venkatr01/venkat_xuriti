import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";



function Landingpage() {
  return (
    <div className='landing' >
        <Stack spacing={10} direction="row">
            <Link to={"/register"}>
              <Button className='loginBtn' variant="contained">Register</Button>      
            </Link>
            <Link to={"/login"}>
              <Button variant="contained">Login</Button>  
            </Link>
        </Stack>    

    </div>
  )
}

export default Landingpage
