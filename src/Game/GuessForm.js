import { useState } from "react"

export default function GuessForm({ setGuesses }) {
  const [guess, setGuess] = useState('')

  const updateText = ({ target: { value } }) => {
    if (value.length > 5) return
    setGuess(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setGuesses(prev => [...prev, guess])
    setGuess('')

  }

  return <form onSubmit={(e) => handleSubmit(e)}>
    <input type='text' value={guess} onChange={updateText} />
    <button disabled={guess.length !== 5 ? true : false}>OK</button>
  </form>

}