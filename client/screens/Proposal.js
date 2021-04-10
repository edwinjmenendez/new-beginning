import React, {useState} from 'react'

import PasswordPrompt from '../components/PasswordPrompt'
import QuestionsPrompt from '../components/QuestionsPrompt';
import TurnAround from '../components/TurnAround';

import styles from './styles/Proposal.css';

const Proposal = () => {
  const [passwordPrompt, setPasswordPrompt] = useState(true);
  const [QPrompt, setQPrompt] = useState(false);
  const [TAprompt, setTAprompt] = useState(false);
  console.log(TAprompt)
  return (
    <div className={styles.proposalContainer} >
      {passwordPrompt && <PasswordPrompt pass={(pass, quest) => {
        setPasswordPrompt(pass);
        setQPrompt(quest);        
      }} />}
      {QPrompt && <QuestionsPrompt turnAround={(q, ta) => {
        setQPrompt(q)
        setTAprompt(ta);
      }} />}
      {TAprompt && <TurnAround />}
    </div>
  )
}

export default Proposal
