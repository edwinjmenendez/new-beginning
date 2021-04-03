import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Events from '../screens/Events'
import Home from '../screens/Home'
import Photos from '../screens/Photos'
import Proposal from '../screens/Proposal'
import RSVP from '../screens/RSVP'
import Travel from '../screens/Travel'
import styles from './styles/Navigator.css'

const Navigator = () => {
  return (
    <Router>
      <div> 
        <div className={styles.navContainer} >
          <Link className={styles.navLink} to="/">Home</Link>
          <Link className={styles.navLink} to="/events">Events</Link>
          <Link className={styles.navLink} to="/rsvp">RSVP</Link>
          <Link className={styles.navLink} to="/photos">Photos</Link>
          <Link className={styles.navLink} to="/travel">Travel</Link>
          <Link className={styles.navLink} to="/proposal">Proposal</Link>
        </div>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/rsvp' component={RSVP} />
          <Route exact path='/photos' component={Photos} />
          <Route exact path='/travel' component={Travel} />
          <Route exact path='/proposal' component={Proposal} />
        </Switch>
      </div>
    </Router>
  )
}

export default Navigator
