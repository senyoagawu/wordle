import { useEffect, useState } from 'react';
import Game from './Game';
import './App.css';
import wordbank from './wordbank'


/* 
Todo
only accept valid words
if 
*/
function App() {
  const [secretWord, setSecretWord] = useState(null)
  console.log('ohh no app rerenders', secretWord)

  const selectSecretWord = () => {
    const randomWordIdx = Math.floor(Math.random() * 12476)
    setSecretWord(wordbank[randomWordIdx])
  }


  useEffect(() => selectSecretWord(), [setSecretWord])

  return (
    <div className="App">
      <h1> Wordle</h1>
      <Game secretWord={secretWord} />
    </div>
  );
}

export default App;
