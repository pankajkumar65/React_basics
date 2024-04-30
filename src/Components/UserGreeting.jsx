import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    let message
     if(this.state.message){
        message = <div>Welcome Vishwas</div>
     }
   

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vishwas</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
