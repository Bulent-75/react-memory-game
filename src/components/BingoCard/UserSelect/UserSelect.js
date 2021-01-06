import React from 'react';
import PropTypes from 'prop-types';
import './UserSelect.css';
import axios from 'axios';

class UserSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      usersToShow:[],
    };

    this.handleChange = this.handleChange.bind(this);
  }  
  
  handleChange(event) {
    this.setState({inputValue: event.target.value});
   // console.log(event.target.value);
   if(event.target.value.length >= 2) {
     this.getData(event.target.value)
     this.addUserToShow(this.state.usersToShow);    
    }
  }
  
  addUserToShow(usersToShow) {
    console.log (this.state);
   // console.log(usersToShow);
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
      <div>
      <div key="usersToShow">

      {
      this.state.usersToShow.map((user,index) => 
        <item> {user['1'].value} </item>
      )
     }
          </div>
    </div>
    </>
  );
}
propTypes = {};
defaultProps = {};
}
export default UserSelect;
