import React from 'react'

import image from '../assets/point.jpg'
import styles from './styles/TurnAround.css';

const TurnAround = () => {
  return (
    <div className={styles.turnAround} >
      <h1>Turn around or I will fuck you up</h1>
      <img src={image} />
    </div>
  )
}

export default TurnAround
