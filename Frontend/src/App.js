import React from 'react';

import './App.css';
class loginBackendResponse extends React.Component {

constructor(props) {
super(props);
this.state = {username: '', password: ''}
}

async login() {
const result = await fetch('http://localhost:9000/users/login', {
  method: 'post',
  body: {
   username: "darianapro",
   password: "1234567"
  }
 })
 alert(JSON.stringify(result))
}
  render() {
    return(<main> 
      <form id="loginForm">
        <input id="loginName" type="text" placeholder={this.state.username}></input>
        <input id="loginPassword" type="password" placeholder="insert your password"></input>
      <button id="submitButton" type="submit" onClick={this.login}>LOGIN</button>
  
      </form>
  
      </main>);
  }
}

export default loginBackendResponse;
