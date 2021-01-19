import React from 'react';
import PropTypes from 'prop-types';
import './UserSelect.css';
import axios from 'axios';
import CardOverview from '../CardOverview.js' ;



class UserSelect extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      usersToShow:[],
      selectedUser: null,
      bingoCards: []
    };

    this.selectUser = this.selectUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(this.state);
  }
  getLocation() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    	  
  }

  getUserCards(userId) {
         console.log (this.state.selectedUser) ;
         this.getLocation(); 
         let url = 'http://192.168.178.22/keno7/all-cards-json/' + userId + '?_format=json';
 
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
        
         
}
  
  handleChange(event) {
    // console.log(event.target.value);
    if(event.target.value.length >= 2) {
      this.getData(event.target.value)
      // this.addUserToShow(this.state.usersToShow);    
    }
    this.setState({
      inputValue: event.target.value
    });
  }
  
  selectUser(event) {

    let userStr = event.target.innerText;
    this.setState({selectedUser: null });
  //  this.setState ( { selectedUser : userStrId }); 
 //   userStr =  event.target.innerText;
     let userStrId = userStr.substring(userStr.lastIndexOf('(') + 1, userStr.lastIndexOf(')')) ;
    // this.setState({selectedUser: )});  // ??
     this.getUserCards(parseInt(userStrId));
    // this.setState({usersToShow:0});  clear user list
     console.log(userStrId);
  }

  getData(userStringToSearch) {
    let url = 'http://192.168.178.22/keno7/admin/cash/autocomplete/users?q=' + userStringToSearch
    axios.get(url)
    .then(res => {
      // const card = res.data['attributes']['field_bingo_card_numbers'];
      const rawData = res.data;
      let usersToShow = Object.entries(rawData)
   //     console.log (Users);
    if (usersToShow.length === 1) {
//      this.getUserCards(parseInt(userStrId)      
    }   
   this.setState({
     usersToShow: usersToShow,
   }
);    
     

    })  
  }

  
  render() {
  function returnOneUser() {
      if (this.state.usersToShow.length  === 1) {
        alert('d');
      }
    }
    
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
