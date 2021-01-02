import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';

import './MenuNav.css';


const element = <h1>sdfsf </h1>;

class MenuNav extends React.Component  {

  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true};
     // This binding is necessary to make `this` work in the callback
     this.changeDiv = this.changeDiv.bind(this);
  }

  changeDiv() {
    console.log('fo') ;
    console.log(element);
    //this.setState({ name: 'Kate' });
    return <Button id="button4" color="inherit" className="bt2" >Button 4</Button>           ;
  }

  render () {
    return (
     <AppBar position="static" className="app-bar">
        <Toolbar>
          <IconButton edge="start" className={"iconb"} color="inherit">
            <MenuIcon />
          </IconButton>
           
          <Button id="button1" color="inherit"  onClick={this.changeDiv }>Button 1</Button>
          <Button id="button2" color="inherit"  >Button 2</Button>
          <Button id="button3" color="inherit" className="bt2" >Button 3</Button>          
        </Toolbar>
      </AppBar>
      )
  }
  
} ;

export default MenuNav ;
