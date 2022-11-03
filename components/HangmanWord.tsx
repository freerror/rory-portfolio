type HangmanWordProps = {
    wordToGuess: string,
    guessedLetters: string[]
    disabled: boolean
}

const HangmanWord = ({ wordToGuess, guessedLetters, disabled = false }: HangmanWordProps) => {
    return (
        <div className="flex gap-1 text-7xl font-bold uppercase font-mono">
            {wordToGuess.split("").map((letter, idx) => {
                const isGuessed = guessedLetters.includes(letter)
                const wasMissed = !isGuessed && disabled
                return (
                    <span key={idx} className="border-b-4 border-black">
                        <span className={isGuessed ? "visible" : wasMissed ? "text-red-400" : "invisible"} >
                            {letter}
                        </span>
                    </span>
                )
            })}
        </div>
    )
}

export default HangmanWord