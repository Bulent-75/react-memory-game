import React from 'react';
import PropTypes from 'prop-types';
import './Memory.css';
import img from './img/1.png'

function Card(props) {
  return <img src={img} id={props.picture} alt='test' />

}
export default class Memory extends React.Component {
  
  constructor(props) {
    super(props);
    var i=0;

    this.state = {
      cards:[]
    };
    
    for(i=0;i<16;i++) {
        this.state.cards.push({
          picture:i,
          status:0,
          id:i
        });
    }

    console.log(this.state.cards);

    this.props = {
      
    }
  }

 
  render() {
    
   
    return(
      <div className="card-grid">
        { this.state.cards.map((card,index) => (
          <>
           <Card id={card.key} picture={card.id} />
           </>
        )) }
     </div>
  );
}

}
