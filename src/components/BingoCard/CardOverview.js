import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BingoCard from './BingoCard';
import axios from 'axios';

class CardOverview  extends React.Component {
    state = {
        bingoCards: [],
        userId:4,
      }

    constructor(props) {
        super(props);
        this.state = {
            bingoCards: [],
            userId:1,
         }
    }
    componentDidMount() {
   //     console.log ( this.state.userId) ;
         
        let url = 'http://192.168.178.22/keno7/all-cards-json/' + this.state.userId  + '?_format=json';

        // console.log(url);
        axios.get(url)
        .then(res => {
          // const card = res.data['attributes']['field_bingo_card_numbers'];
          const rawData = res.data;
          let bingoCards = Object.entries(rawData)
          
                console.log (bingoCards);
//          const cardNumbers =  card['data']['attributes']['field_bingo_card_numbers'];
//          const cardTracker =  card['data']['attributes']['field_bingo_card_tracker'];
//          const nodeId = null;
          this.setState({
            bingoCards 
//            cardTracker,
//            nodeId
          }
          );

          //        this.setState({ cards });        
          console.log ( bingoCards) ;        
        })
      }   
    render() { 
         let bingoCards = this.state.bingoCards
     //   let bingoCards = Object.entries(this.state.bingoCards)
      //  console.log ( bingoCards) ;    

        return (
            this.state.bingoCards.map((bingoCard,index) =>
         <BingoCard key={index}   bingoCard= { bingoCard } /> 
               )            
        );
    }
}
 
export default CardOverview;