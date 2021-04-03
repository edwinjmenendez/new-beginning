import React from 'react'

import Header from './components/Header'
import Navigator from './navigation/Navigator'
import styles from './styles/App.css'

const App = () => {
  return (
    <div className={styles.app} style={styles} >
      <Header />
      <Navigator />
    </div>
  )
}

export default App