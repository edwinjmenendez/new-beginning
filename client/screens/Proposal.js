import React from 'react'

import PasswordPrompt from '../components/PasswordPrompt'

import styles from './styles/Proposal.css';

const Proposal = () => {
  return (
    <div className={styles.proposalContainer} >
      <PasswordPrompt />
    </div>
  )
}

export default Proposal
