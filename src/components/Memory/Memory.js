import React from 'react';
import PropTypes from 'prop-types';
import './Memory.css';
import defImg from './images/default/def.png';
import {images} from './images.js'

function Card(props) {
  return <img src={props.picture} id={props.key} alt='test' />

}

export default class Memory extends React.Component {
  
  
  constructor(props) {
    
    super(props);
    this.state = {
      cards:[]
    };   
    
    function getRandomImages(amount){
      var rndImages = [];
      for (i=0;i<amount;i++) {
        rndImages.push(images[Math.floor(Math.random() * images.length)])
        Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
      }
      return shuffle(rndImages.concat(rndImages));
    }
    
 
    
    let rndImages = getRandomImages(8) ;
    
    var i=0;
    for(i=0;i<16;i++) {
      this.state.cards.push({
        picture:`./images/${rndImages[i]}`,
        status:0,
        id:i
      });
    }
    
    
    this.props = {
      
    }
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    } 
  }

  showPic = (e, data) => {
    // access to e.target here
    console.log(data);
    alert('fd');
}


  render() {
   
    return(
      // <div className="card-actions">
      //    <button>fs</button> 
      //   </div>
        <div className="card-grid">        
        { this.state.cards.map((card,index) => (
           <>
           <Card key={card.id} picture={card.picture} onClick={(e) => this.showPic(e, card.key)}/>
           </>
        )) }
     </div>
  );
}

}
