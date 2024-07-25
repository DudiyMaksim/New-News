import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          New News 
        </Typography>
        <Box>
            <Button color="inherit" component={Link} to="/news">
            News
          </Button>
          <Button color="inherit" component={Link} to="/log">
            Log In
          </Button>
          <Button color="inherit" component={Link} to="/registr">
            registration
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
