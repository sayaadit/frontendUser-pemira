import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import VoteDpm from './pages/vote/voteDpm'
import Thanks from './pages/Thanks'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/vote-DPM' component={VoteDpm} />
        <Route path='/terimakasih' component={Thanks} />
      </Switch>
    </div>
  )
}

export default App
