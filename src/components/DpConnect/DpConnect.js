import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './DpConnect.css';
import './data.js';

export default class DpConnect extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
 // const persons = data ;
 
 render() {
    console.log('sdaf') ;
    return (
      <ul>
        { this.state.persons.map(person => <li>{
         person.name
         + ' - - ' + 
         person.address.street 

         // person.address.map(addr => <li> {addr} </li>)
        
        }</li>)}
      </ul>
    )
  }
}