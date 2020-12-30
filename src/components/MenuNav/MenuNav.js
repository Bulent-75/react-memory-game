import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';

import './MenuNav.css';


const MenuNav = () => (
     <AppBar position="static" className="app-bar">
        <Toolbar>
          <IconButton edge="start" className={"iconb"} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit">News</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit" className="bt2" >Button2</Button>          
        </Toolbar>
      </AppBar>        
);

MenuNav.propTypes = {
};

MenuNav.defaultProps = {};

export default MenuNav;

