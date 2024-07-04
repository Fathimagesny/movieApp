import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { pink } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
 <Box sx={{ flexGrow: 1 }}>
    <AppBar style={{background:'palevioletred'}} position="static">
      <Toolbar>
        <Typography variant="h6" component="div" align='centre' sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>
      <Link style={{color:'white'}}  to='/'> <Button color="inherit">Viewmovie</Button></Link>
       <Link style={{color:'white'}}  to='/Add'> <Button color="inherit">Addmovie</Button></Link>
       {/* <Link style={{color:'white'}}  to='/Grid'> <Button color="inherit">Grid</Button></Link> */}
      </Toolbar>
    </AppBar>
  </Box>

    </div>
  )
}

export default Navbar