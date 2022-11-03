'use client'
import { useCallback, useEffect, useState } from 'react'
import HangmanDrawing from '../../components/HangmanDrawing'
import HangmanWord from '../../components/HangmanWord'
import Keyboard from '../../components/HangmanKeyboard'
import words from "../../fixtures/wordList.json"

const NUM_OF_BODY_PARTS = 6

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
  const correctLetters = guessedLetters.filter(
    letter => wordToGuess.includes(letter)
  )
  const isLoser = incorrectLetters.length >= NUM_OF_BODY_PARTS
  const isWinner = wordToGuess.split("").every(letter => correctLetters.includes(letter))
  const disabled = isWinner || isLoser

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase()

      if (!key.match(/^[A-Z]$/) || disabled) return
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return
    setGuessedLetters(prev => [...prev, letter])
  }, [guessedLetters])

  return (
    <div className='max-w-3xl flex flex-col items-center gap-8 mx-auto'>
      <header className='text-4xl py-4 text-center'>
        {!isWinner && !isLoser ? "Good Luck" : isWinner ? "YOU WIN" : "YOU LOSE"}
        <div className='text-sm pt-3'>{disabled ? "Refresh page to start a new game" : "Guess the word before the stick figure hangs"}</div>
      </header>
      <HangmanDrawing guessesCount={incorrectLetters.length} />
      <HangmanWord {...{ wordToGuess, guessedLetters, isLoser, disabled }} />
      <div className="self-stretch">
        <Keyboard {...{ correctLetters, incorrectLetters, addGuessedLetter, disabled }} />
      </div>
    </div>
  )
}

export default App
