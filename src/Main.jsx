import React from 'react'
import { Route, Switch } from 'react-router'; 

import Discover from './Discover.jsx';
import Profile from './Profile.jsx';

export default function Main() {
  return (
    <Switch >
      <Route exact path='/' component={() => (<Discover />)}></Route>
      <Route exact path='/Profile' component={() => (<Profile />)}></Route>
      <Route exact path='/Discover' component={() => (<Discover />)}></Route>
    </Switch> 
  )
}
