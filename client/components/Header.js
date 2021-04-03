import React from 'react'
import WcIcon from '@material-ui/icons/Wc';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './styles/Header.css'

const Header = () => {
  return (
    <div className={styles.header} >
      <h1>Kelly Palencia</h1>
      <div className={styles.iconsContainer} >
        <FavoriteIcon style={{ width: '25px', height: '50px' }} />
        <WcIcon style={{ width: '50px', height: '50px' }} />
        <FavoriteIcon style={{ width: '25px', height: '50px' }} />
      </div>
      <h1>Edwin Menendez</h1>
    </div>
  )
}

export default Header
