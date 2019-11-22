import React from 'react';

import './App.css';

function App() {
  return (
   <main> 
    <form id="loginForm">
      <input id="loginName" type="text" placeholder="insert your name"></input>
      <input id="loginPassword" type="password" placeholder="insert your password"></input>
    <button id="submitButton" type="submit">LOGIN</button>

    </form>

    </main>
  );
}

export default App;
