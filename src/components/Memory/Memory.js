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
    this.startGame = this.startGame.bind(this);

    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  
  function getRandomImages(amount) {
    var rndImages = [];
    let i =0 ;
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
}

startGame() {
      // 1. Make a shallow copy of the items
    let items = [...this.state.cards];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[1]};
    // 3. Replace the property you're intested in
    item.picture = './images/default/def.png';
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items.forEach(item => {
      items.push(item.picture = './images/default/def.png')
    });
    // 5. Set the state to our new copy
   // this.setState({cards:[]});
    this.setState([{cards:items}]);

}  
  handleClick(e) {
    this.setState({clickCount:1});
    alert(e.target.src)
    console.log("Click happened ag");
  }        

  render() {
    return (
      <>
      <div className="card-actions">
         <button onClick={this.startGame}>Start</button>
        </div>
      <div className="card-grid">
        {this.state.cards.map((card, index) => (
          <div onClick={this.handleClick} id={card.id} >
            <Card picture={card.picture} id={card.id} alt="fas" />
             </div>
        ))}
      </div>
      </>
    );
  }
}

function Card(props) {
   return <img src={props.picture} id={props.id} alt='test' visible={props.visible} />
}
