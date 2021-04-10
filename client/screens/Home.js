import React from 'react'

import image from '../assets/clink.png'
import styles from './styles/ComingSoon.css';

const Home = () => {
  return (
    <div className={styles.comingSoon} > 
      <h1>Our Story</h1>
      <h2>Coming Soon</h2>
      <img src={image} />
    </div>
  )
}

export default Home
