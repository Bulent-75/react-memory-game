import React from 'react';
import PropTypes from 'prop-types';
import './UserSelect.css';
import axios from 'axios';
import CardOverview from '../CardOverview.js' ;

class UserSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      usersToShow:[],
      selectedUser: 0,
      bingoCards: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }
  
  getUserCards() {
    //     console.log ( this.state.userId) ;
          
         let url = 'http://192.168.178.22/keno7/all-cards-json/' + this.state.selectedUser  + '?_format=json';
 
         // console.log(url);
         axios.get(url)
         .then(res => {
           // const card = res.data['attributes']['field_bingo_card_numbers'];
           const rawData = res.data;
           let bingoCards = Object.entries(rawData);
           this.setState(
             {bingoCards: bingoCards}
           )
         })
         console.log(this.state);
}
  

  handleChange(event) {
    this.setState({inputValue: event.target.value});
   // console.log(event.target.value);
   if(event.target.value.length >= 2) {
     this.getData(event.target.value)
  // this.addUserToShow(this.state.usersToShow);    
    }
  }
  
  selectUser(event) {

    let userStr = event.target.innerText;
      
  //  this.setState ( { selectedUser : userStrId }); 
 //   userStr =  event.target.innerText;
     let userStrId = userStr.substring(userStr.lastIndexOf('(') + 1, userStr.lastIndexOf(')')) ;
     this.getUserCards();
     this.setState({selectedUser: parseInt(userStrId)});
//     console.log(this.state);
  }

  getData(userStringToSearch) {
    let url = 'http://192.168.178.22/keno7/admin/cash/autocomplete/users?q=' + userStringToSearch
    axios.get(url)
    .then(res => {
      // const card = res.data['attributes']['field_bingo_card_numbers'];
      const rawData = res.data;
      let usersToShow = Object.entries(rawData)
   //     console.log (Users);
   this.setState({
     usersToShow: usersToShow,
   }
);    
     

    })  
  }

  render() {
    return (
      <>
    <div className="UserSelect">
      <input
        type="text"
        name="name"
        onChange={this.handleChange}        
      />
    </div>  

      <ul id="usersToShow">

      {
      this.state.usersToShow.map((user,index) => 
        <li key={index} onClick={this.selectUser}>{user['1'].value}</li>
      )
     }
          </ul>
          <CardOverview bingoCards={ this.state.bingoCards} />
    </>
  );
}
propTypes = {};
defaultProps = {};
}

export default UserSelect;
