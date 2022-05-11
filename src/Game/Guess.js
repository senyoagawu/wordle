import ProcessGuess from './ProcessGuess'


export default function Guess({ num, guesses, secretWord }) {
  const guess = guesses[num - 1]

  return <div className={`guess ${(num === guesses.length) ? 'active' : ''}`}>
    <ProcessGuess guess={guess} secretWord={secretWord} />
  </div>

}


