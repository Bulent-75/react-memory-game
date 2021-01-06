import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BingoCard from './BingoCard';
import axios from 'axios';

class CardOverview  extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
            bingoCards: [],
            userId:2,
        }
   
  }
    render() { 
         let bingoCards = this.props.bingoCards
     //   let bingoCards = Object.entries(this.state.bingoCards)
      //  console.log ( bingoCards) ;    

      console.log(bingoCards)
        return (
           this.props.bingoCards.map((bingoCard,index) =>
         <BingoCard key={index} bingoCard= { bingoCard } /> 
               )            
        );
    }
        
}
 
export default CardOverview;