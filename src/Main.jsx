import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router'; 

import Discover from './Discover.jsx';
import Likes from './Likes.jsx';
import Profile from './Profile.jsx';

export default function Main() {
  const [filters, setFilters] = useState({ 'Comedy': true, 'Sci-fi': true, 'Horror': true, 'Romance': true, 'Action': true, 'Thriller': true, 'Drama': true, 'Mystery': true, 'Crime': true, 'Animation': true, 'Adventure': true, 'Fantasy': true });


  return (
    <Switch >
      <Route exact path='/' component={() => (<Discover  filters={filters} />)}></Route>
      <Route exact path='/Likes' component={() => (<Likes />)}></Route>
      <Route exact path='/Profile' component={() => (<Profile changeFilters={setFilters} filters={filters} />)}></Route>
      <Route exact path='/Discover' component={() => (<Discover  filters={filters} />)}></Route>
    </Switch> 
  )
}
