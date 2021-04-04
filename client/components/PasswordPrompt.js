import React, { useState } from 'react'

import styles from './styles/PasswordPrompt.css'

const PasswordPrompt = () => {
  const [password, setPassword] = useState('');
  
  const handleClick = () => {
    if (password === 'test') console.log('correct password');
    else console.log('wrong password')
  }
  
  const handleChange = (e) => setPassword(e.target.value);
  

  return (
    <div className={styles.promptContainer} >
      <h3>ENTER PASSWORD</h3>
      <div className={styles.inputsContainer} >
        <input onChange={handleChange} type='password' placeholder='Password'/>
        <button onClick={handleClick}>ENTER</button>
      </div>
    </div>
  )
}

export default PasswordPrompt;
