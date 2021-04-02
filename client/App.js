import React from 'react'

import Header from './components/Header'
import Home from './screens/Home'
import styles from './styles/App.css'

const App = () => {
  return (
    <div className={styles.app} style={styles} >
      <Header />
      <Home />
    </div>
  )
}

export default App