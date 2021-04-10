import React from 'react'

import image from '../assets/weddingParty.png'
import styles from './styles/ComingSoon.css';

const Photos = () => {
  return (
    <div className={styles.comingSoon}>
      <h1>Photos</h1>
      <h2>Coming Soon</h2>
      <img src={image} />
    </div>
  )
}

export default Photos
