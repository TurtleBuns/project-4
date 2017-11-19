import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Home = () =>(
  
      <div id="welcome-container">
        <div id="welcome">
          <pre>MISSION REPORT<span id="mars-highlight">:MARS</span></pre>
          <p href="#" id="click-here" ><Link to='/register'>CLICK HERE TO ENTER</Link></p>
        </div>
      </div>
    )

    export default Home