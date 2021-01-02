import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import "./bingo.css" ;

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
 
  
   render() {
    function NrBox(props) {
      return <div className={props.hit} box>{props.value}</div>
    }
    
    return (
      <ul>
        { this.state.cards.map(card => <li>Card id: {
          //console.log(card.vid);
          card.vid[0]['value']
        }
          {
            card.field_bingo_card_numbers.map(number => <ul> <li>{
               }
             { <NrBox hit="box" value={number.value} /> } 
            {
            
            // number.field_bingo_card_tracker
              }
            {
            
            }
            </li></ul>)
         // person.address.map(addr => <li> {addr} </li>)
        
        }</li>)}
      </ul>
    )
  }
}