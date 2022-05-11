import Tile from "./Tile"

export default function ProcessGuess({ guess, secretWord }) {
  if (!guess) return EmptyBoard()

  return guess.split('').map((letter, idx) => {
    let color = 'transparent'

    if (letter && letter.toUpperCase() === secretWord[idx]) {
      color = 'green'
    } else if (letter && secretWord.includes(letter.toUpperCase())) {
      color = 'yellow'
    }
    return <Tile key={idx} letter={letter} color={color} />
  })
}

function EmptyBoard() {
  return <>
    <Tile key={1} />
    <Tile key={2} />
    <Tile key={3} />
    <Tile key={4} />
    <Tile key={5} />
  </>
}