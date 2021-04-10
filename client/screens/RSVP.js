import React from 'react'

import image from '../assets/rsvp.png'
import styles from './styles/ComingSoon.css';

const RSVP = () => {
  return (
    <div className={styles.comingSoon}>
      <h1>RSVP</h1>
      <h2>Coming Soon</h2>
      <img src={image} />
    </div>
  )
}

export default RSVP
