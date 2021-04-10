import React from 'react'

import image from '../assets/travel.png'
import styles from './styles/ComingSoon.css';

const Travel = () => {
  return (
    <div className={styles.comingSoon}>
      <h1>Travel</h1>
      <h2>Coming Soon</h2>
      <img src={image} />
    </div>
  )
}

export default Travel
