const replaceEmphasis = (str) => {
    // Replaces _emphasized_ passages with css stylized span
    const passageArray = str.split("_").map((passage, idx) => {
        return <span key={idx} className={idx % 2 !== 0 ? '' : 'text-purple-800'}>{passage}</span>
    })
    return passageArray
}

export default replaceEmphasis