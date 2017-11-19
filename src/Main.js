import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Encounters from './Encounters'



const Main = () => (
  <main>
    <Switch>
      <Route exact path='/'  component={Home}/>
      <Route path='/register' component={Register}/>
      <Route path='/encounters' component={Encounters}/>
    </Switch>
  </main>
)

export default Main