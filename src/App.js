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
      <div id="welcome-container">
        <div id="welcome">
          <pre>MISSION REPORT<span id="mars-highlight">:MARS</span></pre><a href="#" id="click-here" >CLICK HERE TO ENTER</a>
        </div>
      </div>
    )
  }
}