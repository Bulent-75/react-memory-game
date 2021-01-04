import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './BingoCard.css';

const field_bingo_card_numbers = null ;

export default class BingoCard extends React.Component {

  // const nId = '';
  render() {
    console.log(this.props.bingoCard);
    let field_bingo_card_numbers = this.props.bingoCard['1'].field_bingo_card_numbers ; 
    let field_bingo_card_tracker = this.props.bingoCard['1'].field_bingo_card_tracker  
  
    // make own class?
    function NrBox(props) {
      return <div id={props.id} className={"box" + (props.hit ? ' hit' : '')} box>{props.number}</div>
    }
        
    console.log(field_bingo_card_numbers)
    return (
     <div className="bingo-card">
       <div className="card-grid">
         {
 
    field_bingo_card_numbers.map((number,index) =>
    <NrBox key={index} number={number.value} hit={field_bingo_card_tracker[index].value} /> 
        )
   }
    </div>  
      </div>      
    )
  }
}