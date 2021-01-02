import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
=======
import PropTypes from 'prop-types';
import axios from 'axios';
import './DpConnect.css';
import './data.js';
>>>>>>> navbar

export default class DpConnect extends React.Component {
  state = {
    cards: []
  }

  componentDidMount() {
    axios.get(`http://192.168.178.22/keno7/all-cards-json?_format=json`)
      .then(res => {
        const cards = res.data;
        this.setState({
          cards
           }
          );
//        this.setState({ cards });        
      })
  }
 
<<<<<<< HEAD
  
   render() {
    function NrBox(props) {
      return <div className={props.hit}>{props.value}</div>
    }
    
    return (
      <ul>fsf
        { this.state.cards.map(card => <li>Card id: {
          //console.log(card.vid);
=======
  // const cards = data ;
 
  render() {
   const index2 = 0 ;   
   
      return (
      <ul>
        { this.state.cards.map(card => <li>Card id: {
         //console.log(card.vid);
>>>>>>> navbar
          card.vid[0]['value']
        }
          {
            card.field_bingo_card_numbers.map(number => <ul> <li>{
<<<<<<< HEAD
              number.value }
              const nrBox = <NrBox hit="fdsa" value={number.value} /> ;
            {
            
            // number.field_bingo_card_tracker
              }
            {
            
            }
            </li></ul>)
         // person.address.map(addr => <li> {addr} </li>)
        
        }</li>)}
=======
            number.value }
            {
           //  index2 = index2 + 1             
            // number.field_bingo_card_tracker
              } -  
            {
             index2 
            }
            </li></ul>,index2)
         // person.address.map(addr => <li> {addr} </li>)
        
        }</li>,index2)}
>>>>>>> navbar
      </ul>
    )
  }
}