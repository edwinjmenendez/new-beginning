import React, { useState } from 'react'

import styles from './styles/QuestionsPrompt.css'

const QuestionsPrompt = ({turnAround}) => {
  const [counter, setCounter] = useState(0)
  const [question, setQuestion] = useState('When did we first meet again?');
  const [response, setResponse] = useState({
    first: 'June 16, 2011',
    second: 'August 26, 2012',
    third: 'September 11 2001',
  })

  const handleClick = () => {
    if (counter == 0) {
      setQuestion('What is our favorite sushi spot?')
      setResponse({
        first: 'Tenno Sushi',
        second: 'Arigatos',
        third: 'Sushi Stop',
      })
    }
    if (counter == 1) {
      setQuestion('Very good! HARDER QUESTION. What year did you and I go to EDC?');
      setResponse({
        first: '2015',
        second: '2016',
        third: '2018',
      })
    }
    if (counter === 2) {
      setQuestion('IMPRESSIVE! When did I love you? (not when I told you but when did I love you)')
      setResponse({
        first: 'Never',
        second: '2014',
        third: 'The moment I laid my eyes on you',
      })
    }
    if (counter === 3) {
      setQuestion('I suspect you know what is going on at this point?')
      setResponse({
        first: 'Yes',
        second: 'No',
        third: 'Kinda, but I am confused',
      })
    }
    if (counter === 4) {
      setQuestion('Are you sure you are ready?')
      setResponse({
        first: 'Yes',
        second: 'Yes',
        third: 'More Yes',
      })
      console.log(turnAround)
      turnAround(false, true);
    }
    setCounter(counter + 1);
  }

  return (
    <div className={styles.componentCard} onClick={handleClick} >
      <h3>{question}</h3>
      <p>{response.first}</p>
      <p>{response.second}</p>
      <p>{response.third}</p>
      {/* <p>{counter}</p> */}
    </div>
  )
}

export default QuestionsPrompt;
