const replaceEmphasis = (str) => {
    // Replaces _emphasized_ passages with css stylized span
    const passageArray = str.split("_").map((passage, idx) => {
        if (idx % 2 !== 0) {
            return <span className='text-purple-800'>{passage}</span>
        }
        return passage
    })
    return passageArray
}

export default replaceEmphasis