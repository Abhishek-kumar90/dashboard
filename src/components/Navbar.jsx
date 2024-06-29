import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, makeStyles } from '@mui/material';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../context/ThemeContext';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Admin Dashboard
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Dashboard
        </Button>
        <Button component={Link} to="/charts" color="inherit">
          Charts
        </Button>
        <Button component={Link} to="/calendar" color="inherit">
          Calendar
        </Button>
        <Button component={Link} to="/kanban" color="inherit">
          Kanban
        </Button>
        <Button component={Link} to="/tables" color="inherit">
          Tables
        </Button>
        <IconButton edge="end" color="inherit" onClick={toggleTheme}>
          {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
