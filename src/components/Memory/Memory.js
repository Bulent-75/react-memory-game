import React from "react";
import PropTypes from "prop-types";
import "./Memory.css";
import defImg from "./images/default/def.png";
import { images } from "./images.js";

export default class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      amount:4,
      clickCount:0
    };
    
    this.handleClick = this.handleClick.bind(this);

    function getRandomImages(amount) {
      var rndImages = [];
      for (i = 0; i < amount; i++) {
        let rndImage = Math.floor(Math.random() * images.length);
        rndImages.push(images[rndImage]);
        images.splice(rndImage, 1);
      }
      return shuffle(rndImages.concat(rndImages));
    }

    let rndImages = getRandomImages(16);

    var i = 0;
    for (i = 0; i < 16; i++) {
      this.state.cards.push({
        picture: `./images/${rndImages[i]}`,
        status: 0,
        id: i,
      });
    }

    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    
  }
  
  handleClick() {
    
    this.setState({clickCount:1});

    console.log("Click happened ag");
  }        

  render() {
    return (
      // <div className="card-actions">
      //    <button>fs</button>
      //   </div>
      <div className="card-grid">
        {this.state.cards.map((card, index) => (
          <div onClick={this.handleClick} > 
            <Card picture={card.picture} id={card.id} alt="fas" />
             </div>
        ))}
      </div>
    );
  }
}

function Card(props) {
   return <img src={props.picture} id={props.id} alt='test' />
}
