import Guess from './Guess'
import { useState } from 'react'
import GuessForm from './GuessForm'

export default function Game({ secretWord }) {
  const [guesses, setGuesses] = useState([])



  return <div>
    <GuessForm setGuesses={setGuesses} />
    <Guess secretWord={secretWord} num={1} guesses={guesses} />
    <Guess secretWord={secretWord} num={2} guesses={guesses} />
    <Guess secretWord={secretWord} num={3} guesses={guesses} />
    <Guess secretWord={secretWord} num={4} guesses={guesses} />
    <Guess secretWord={secretWord} num={5} guesses={guesses} />
    <Guess secretWord={secretWord} num={6} guesses={guesses} />
  </div>

}

