import React from 'react';
import PropTypes from 'prop-types';
import './DevState.css';


function getName() {
  return 'name from functiocall' ;
}

class DevState extends React.Component {
  constructor(props) {
    super(props);
    // Define your state object here
    this.state = {
      boxes: {
        1: { 
          1:{ status: true, /* more data */ },
          2:{ status: true, /* more data */ },
        },
        2: { 
          1:{ status: true, /* more data */ },
          2:{ status: true, /* more data */ },
        },
        3: { 
          1:{ status: true, /* more data */ },
          2:{ status: true, /* more data */ },
        },
        4: { 
          1:{ status: true, /* more data */ },
          2:{ status: true, /* more data */ },
        }
      }
    };
  }
 

 changeName = () => {
  this.setState({name: getName()});
}

render(){
       
  return <div>
          <span>Name  : { this.state.name }</span>
          <span>Age  : { this.state.age }</span>;
          <button type="button" onClick={this.changeName} >Change color </button>
         </div>    
      }
}

export default DevState