import React, { useState } from 'react'

import styles from './styles/PasswordPrompt.css'

const PasswordPrompt = ({pass}) => {
  const [password, setPassword] = useState('');
  const [corrPass, setCorrPass] = useState('woah');
  const [activePrompt, setActivePrompt] = useState(true)
  
  const handleClick = () => {
    if (password === '123') {
      setCorrPass(true);
      pass(false, true);
    }
    else {
      setCorrPass(false);
    }
  }
  
  const handleChange = (e) => setPassword(e.target.value);

  return (
    <div className={styles.promptContainer} >
      <h3>Enter Password</h3>
      <div className={styles.inputsContainer} >
        <input onChange={handleChange} type='password' placeholder='Password'/>
        <button onClick={handleClick}>ENTER</button>
        {pass}
      </div>
      {!corrPass && <p>Password is incorrect</p>}
    </div>
  )
}

export default PasswordPrompt;
