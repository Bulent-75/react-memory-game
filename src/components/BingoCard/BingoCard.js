import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './BingoCard.css';


export default class BingoCard extends React.Component {
  state = {
    cardNumbers: [],
    cardTracker: [],
  }

  componentDidMount() {
     axios.get('http://192.168.178.22/keno7/jsonapi/node/bingo_card/9b12b54d-f852-436b-a94c-d7e087d96e8a')
      .then(res => {
        // const card = res.data['attributes']['field_bingo_card_numbers'];
        const card = res.data ;
//        console.log (card);
        const cardNumbers =  card['data']['attributes']['field_bingo_card_numbers'];
        const cardTracker =  card['data']['attributes']['field_bingo_card_tracker'];
      
        this.setState({
          cardNumbers,
          cardTracker
           }
          );
//        this.setState({ cards });        
      })
  }

  render() {

    function NrBox(props) {
      return <div id={props.id} className={"box" + (props.hit ? ' hit' : '')} box>{props.number}</div>
    }
        
    return (
     <div className="bingo-card">
       <div className="card-grid">
         {
 
    this.state.cardNumbers.map((number,index) => 
    <NrBox key={index} number={number} hit={this.state.cardTracker[index]} />
        )
  }
    </div>  
      </div>      
    )
  }
}