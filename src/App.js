import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id="app">
      <Home />      
      </div>
    );
  }
}

class Home extends Component{
  render(){
    return(
      <div id="welcome">
        <h1>Welcome</h1>
      </div>
    )
  }
}