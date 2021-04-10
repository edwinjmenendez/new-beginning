import React from 'react'
import styles from './styles/Header.css'
import icon from '../assets/iconMarriage.png'

const Header = () => {
  return (
    <div className={styles.header} >
      <h1>Edwin Menendez</h1>
      <div className={styles.iconsContainer} >
        <img src={icon} className={styles.icon} />
      </div>
      <h1>Kelly Palencia</h1>
    </div>
  )
}

export default Header
