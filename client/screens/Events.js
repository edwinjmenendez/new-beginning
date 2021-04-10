import React from 'react';

import image from '../assets/events.png'
import styles from './styles/ComingSoon.css';

const Events = () => {
  return (
    <div className={styles.comingSoon}>
      <h1>Events</h1>
      <h2>Coming Soon</h2>
      <img src={image} />
    </div>
  )
}

export default Events
