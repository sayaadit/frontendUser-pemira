import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './pages/home/Home'
import VoteDpm from './pages/vote/voteDpm'
import VoteBem from './pages/vote/voteBem'
import VoteHimpunan from './pages/vote/voteHimpunan'

import Thanks from './pages/Thanks'
import Login from './pages/login'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/vote-DPM' component={VoteDpm} />
        <Route path='/vote-BEM' component={VoteBem} />
        <Route path='/vote-Himpunan' component={VoteHimpunan} />
        <Route path='/terimakasih' component={Thanks} />
        <Route path='/' component={Login} />
      </Switch>
    </div>
  )
}

export default App
