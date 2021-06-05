import React, { useState } from 'react'

import styles from './styles/QuestionsPrompt.css'

const QuestionsPrompt = ({turnAround}) => {
  const [counter, setCounter] = useState(0);
  const [decoyCounter, setDecoyCounter] = useState(1)
  const [question, setQuestion] = useState("When is Edwin's birthday?");
  const [response, setResponse] = useState({
    first: 'September 15, 1995',
    second: 'September 25, 1994',
    third: 'September 25, 1995',
  })

  const handleClick = () => {
    if (counter == -1) {
      setQuestion('When did we first meet (again) in person?')
      setResponse({
        first: 'June 16, 2012',
        second: 'August 26, 2012',
        third: 'July 15, 2012',
      })
    }
    if (counter == 0) {
      setQuestion('OKAY. I see you I see you! What is our favorite sushi spot?')
      setResponse({
        first: 'Sushi Stop',
        second: 'Arigatos',
        third: 'Tenno Sushi',
      })
    }
    if (counter == 1) {
      setQuestion('Okay, I know that last question was too easy. What year was the scavenger hunt?');
      setResponse({
        first: '2014',
        second: '2015',
        third: '2016',
      })
    }
    if (counter === 2) {
      setQuestion('IMPRESSIVE! Kelly, I have always loved you. But I dont think you know when that love started. When did I fall in love with you? (not when I told you but when did I love you)')
      setResponse({
        first: 'Never',
        second: '2014',
        third: 'The moment I laid my eyes on you',
      })
    }
    if (counter === 3) {
      setQuestion('I suspect you know and realize what is going on at this point?')
      setResponse({
        first: 'Yes',
        second: 'No',
        third: 'Kinda, but I dont know if I am ready',
      })
    }
    if (counter === 4) {
      setQuestion('Are you sure you are ready?')
      setResponse({
        first: 'Yes',
        second: 'No',
        third: 'I dont know',
      })
    }
    if (counter === 5) {
      setQuestion('Last chance to walk away?')
      setResponse({
        first: 'Continue',
        second: 'LEAVE... Dont even answer the question',
        third: 'Throw laptop off bridge',
      })
    }
    if (counter === 6) {
      setQuestion('WOW, you really wanna go through with this huh? No backing out now!')
      setResponse({
        first: 'Yes',
        second: 'Yes',
        third: 'More Yes',
      })
    }
    if (counter === 7) {
      console.log(turnAround)
      turnAround(false, true);
    }
    setCounter(counter + 1);
    setDecoyCounter(decoyCounter + 1)
  }

  return (
    <div className={styles.componentCard}>
      <h3>{question}</h3>
      <div className={styles.questions} >
        <div className={styles.question} >
          <input type="radio" name="radio"></input>
          <span>{response.first}</span>
        </div>
        <div className={styles.question} >
          <input type="radio" name="radio"></input>
          <span>{response.second}</span>
        </div>
        <div className={styles.question} >
          <input type="radio"ß name="radio"></input>
          <span>{response.third}</span>
        </div>
      </div>
        <button onClick={handleClick}>NEXT</button>
        <p>{decoyCounter} / 15</p>
    </div>
  )
}

export default QuestionsPrompt;
