import React from 'react';
import PropTypes from 'prop-types';
import './DevState.css';


class DevState extends React.Component {
  constructor(props) {
    super(props);
    // Define your state object here
    this.state = {
      data: [
        { name: 'John',
        age: 22
      }
    ] 
  }
}

render(){
       
  return <div>
          <span>Name  : { this.props.name }</span>
          <span>Age  : { this.state.data.age }</span>;
         </div>
   }
}

export default DevState