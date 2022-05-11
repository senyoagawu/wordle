import { useState } from "react"
import wordbank from '../wordbank'
export default function GuessForm({ setGuesses }) {
  const [guess, setGuess] = useState('')

  const updateText = ({ target: { value } }) => {
    if (value.length > 5) return
    setGuess(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!wordbank.includes(e.target.value)) {
      window.alert('please write a valid 5 letter english word')
      return
    }
    setGuesses(prev => [...prev, guess])
    setGuess('')

  }

  return <form onSubmit={(e) => handleSubmit(e)}>
    <input type='text' value={guess} onChange={updateText} />
    <button disabled={guess.length !== 5 ? true : false}>OK</button>
  </form>

}