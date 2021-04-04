import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Events from '../screens/Events'
import Home from '../screens/Home'
import Photos from '../screens/Photos'
import Proposal from '../screens/Proposal'
import RSVP from '../screens/RSVP'
import Travel from '../screens/Travel'
import WeddingParty from '../screens/PageNotFound';
import styles from './styles/Navigator.css'

const Navigator = () => {
  let active = { 
    color: '#000',
    'font-weight': '900',
    'text-decoration': 'none',
   }
  return (
    <Router>
      <div className={styles.routerContainer} > 
        <div className={styles.navContainer} >
          <NavLink activeStyle={active} className={styles.navLink} to="/home">Our Story</NavLink>
          <NavLink activeStyle={active} className={styles.navLink} to="/events">Events</NavLink>
          <NavLink activeStyle={active} className={styles.navLink} to="/rsvp">RSVP</NavLink>
          <NavLink activeStyle={active} className={styles.navLink} to="/photos">Photos</NavLink>
          <NavLink activeStyle={active} className={styles.navLink} to="/travel">Travel</NavLink>
          <NavLink activeStyle={active} className={styles.navLink} to="/proposal">Proposal</NavLink>
        </div>
        {/* <hr /> */}
        <div className={styles.switchContainer}>
          <Switch >
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/rsvp' component={RSVP} />
            <Route exact path='/photos' component={Photos} />
            <Route exact path='/travel' component={Travel} />
            <Route exact path='/proposal' component={Proposal} />
            <Route path='/*' component={WeddingParty} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Navigator
