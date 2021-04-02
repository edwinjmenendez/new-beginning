import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import { 
//   Events, Home, 
//   Photos, Proposal, 
//   // RSVP, Travel,
//   // WeddingParty,
//  } from '../screens'

import Events from '../screens/Events'
import Photos from '../screens/Photos'
import Home from '../screens/Home'
import Proposal from '../screens/Proposal'

const Navigator = () => {
  return (
    <Router>
      <div>
      
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/proposal">Proposal</Link>
        {/* <Link to="/rsvp">RSVP</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/weddingparty">Weddingparty</Link> */}
      
        <hr />

        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/events'><Events /></Route>
          <Route path='/photos'><Photos /></Route>
          <Route path='/proposal'><Proposal /></Route>
          {/* <Route exact path='/rsvp'><RSVP /></Route>
          <Route exact path='/travel'><Travel /></Route>
          <Route exact path='/weddingparty'><WeddingParty /></Route> */}
        </Switch>
      </div>
    </Router>
  )
}

export default Navigator
