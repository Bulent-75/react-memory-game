import React from "react";
import PropTypes from "prop-types";
import "./Memory.css";
// import defImg from "./images/default/def.png";
import { images } from "./images.js";

export default class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      amount: 8,
      flag: 0,
      cardClicked1: {},
      cardClicked2: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.startGame = this.startGame.bind(this);
    let amount = this.state.amount/2 
    
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    
    const pickRandom = (arr, count) => {
      let _arr = [...arr];
        return [...Array(count)].map(
        () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
      );
    };

    let rndImages = pickRandom(images, amount);
    rndImages =  shuffle(rndImages.concat(rndImages));

    var i = 0;
    for (i = 0; i < amount*2; i++) {
      this.state.cards.push({
        picture: rndImages[i],
        status: 0,
        picOriginal: rndImages[i],
        visible: true,
        id: i,
      });
    }
  }

  startGame() {
    let arr = [];
    const renderStates = this.state.cards.map((el, i) => {
      el.picture = "default/def.png";
      arr.push(el);
      return arr;
    });

    this.setState({ cards: arr });
  }

  handleClick(e) {

    /// alert(card.picOriginal);
    let flag = this.state.flag;

    if (flag === 0) {  // first click
      
      let card1 = this.state.cards[e.target.id];
      this.setState({ flag: 1 });
      // let card = this.state.cardClicked1 ;
      this.setState({ cardClicked1: card1 });
      card1.picture = this.state.cards[e.target.id].picOriginal;
    } else {    //second click
     
      let card2 = this.state.cards[e.target.id];

      this.setState({ cardClicked2: card2 });
      // // alert(card2.picOriginal);
      let card1 = this.state.cardClicked1;
      card2.picture = card2.picOriginal;
      if (card1.picOriginal === card2.picOriginal) {
      } else {
  
        if(this.timeout) clearTimeout(this.timeout);
        let defImg = "default/def.png";
        this.timeout = setTimeout(() => {
          this.setState({amount:12})
           card1.picture = defImg;
           card2.picture = defImg;
           this.setState({ cardClicked1: null,cardClicked2: null })
        },500);
      }
      // this.setState({ cardClicked1: null,cardClicked2: null })
      this.setState({ flag: 0 });
      // console.log(card2.picOriginal);
    }

    // if   cardClicked.picture = cardClicked.picOriginal
  }

  doSearch = (event) => {
  
}

  render() {
    return (
      <>
        <div className="card-actions">
          <button onClick={this.startGame}>Start</button>
          <button onClick={this.resetGame}>Reset</button>
          <button onClick={this.doSearch}>tets</button>
        </div>
        <div className="card-grid">
          {this.state.cards.map((card, index) => (
            <div onClick={this.handleClick} id={card.id}>
              <Card picture={card.picture} id={card.id} alt="fas" />
            </div>
          ))}
        </div>
      </>
    );
  }
}

function Card(props) {
  let path = "./images/" + props.picture;
  return <img src={path} id={props.id} alt="test" visible={props.visible} />;
}
