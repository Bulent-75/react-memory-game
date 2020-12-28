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
  <div className="MenuNav">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={"iconb"} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={"title"}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>        

  </div>
);

MenuNav.propTypes = {};

MenuNav.defaultProps = {};

export default MenuNav;

