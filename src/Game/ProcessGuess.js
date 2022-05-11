import Tile from "./Tile"

export default function ProcessGuess({ guess, secretWord }) {
  if (!guess) return EmptyBoard()

  const copySecretWord = secretWord.split('')
  debugger
  const results = guess.split('').map(char => ({ letter: char, color: 'transparent' }))
  console.log(guess, results)
  guess.split('').forEach((char, idx) => {
    if (char === copySecretWord[idx]) {
      results[idx] = { ...results[idx], color: 'green' }
      copySecretWord[idx] = '-' //so you don't double count
    }
  })

  results.forEach(result => {
    if (result.color !== 'green') {
      for (let i = 0; i < copySecretWord.length; i++) {
        const char = copySecretWord[i];
        if (char === result.letter) {
          copySecretWord[i] = '_'
          result.color = 'yellow'
          console.log(result)

        }


      }
    }
  })
  return results.map(({ letter, color }, idx) => <Tile key={idx} letter={letter} color={color} />)
}

// if (!guess) return EmptyBoard()

// return guess.split('').map((letter, idx) => {
//   let color = 'transparent'

//   if (letter && letter.toUpperCase() === secretWord[idx]) {
//     color = 'green'
//   } else if (letter && secretWord.includes(letter.toUpperCase())) {
//     color = 'yellow'
//   }
//   return <Tile key={idx} letter={letter} color={color} />
// })
// }

function EmptyBoard() {
  return <>
    <Tile key={1} />
    <Tile key={2} />
    <Tile key={3} />
    <Tile key={4} />
    <Tile key={5} />
  </>
}