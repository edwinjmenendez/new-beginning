import React from 'react'

import Header from './components/Header'
import Navigator from './navigation/Navigator'
import Events from './screens/Events'
import Home from './screens/Home'
import Photos from './screens/Photos'
import Proposal from './screens/Proposal'
import styles from './styles/App.css'

const App = () => {
  return (
    <div className={styles.app} style={styles} >
      <Header />
      <Navigator />
      {/* <Home />
      <Events />
      <Photos />
      <Proposal /> */}
    </div>
  )
}

export default App