import { MouseEventHandler } from "react"

const KEYS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const BUTTON = "text-lg border-2 border-black capitalize font-semibold shadow-sm py-1.5 rounded-lg"
const ACTIVE = BUTTON + " hover:bg-stone-100"
const INNACTIVE = BUTTON + " opacity-50"
const CORRECT = BUTTON + INNACTIVE + " bg-green-400 cursor-default"
const WRONG = BUTTON + INNACTIVE + " bg-red-300 py-1.5 cursor-default"

type KeyboardProps = {
    correctLetters: string[]
    incorrectLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled?: boolean
}

const Keyboard = ({ correctLetters, incorrectLetters, addGuessedLetter, disabled = false }: KeyboardProps) => {
    return (
        <div
            className="grid gap-3 mx-5"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))" }}
        >
            {KEYS.map(key => {
                const isCorrect = correctLetters.includes(key)
                const isWrong = incorrectLetters.includes(key)
                let style = disabled ? INNACTIVE : ACTIVE
                if (isCorrect)
                    style = CORRECT
                else if (isWrong)
                    style = WRONG

                return (
                    <button
                        disabled={isCorrect || isWrong || disabled}
                        className={style} key={key} onClick={() => addGuessedLetter(key)}
                    >{key}</button>
                )
            })}

        </div>
    )
}

export default Keyboard