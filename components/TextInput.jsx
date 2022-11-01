const TextInput = (props) => {
  return (
    <>
      <input type='text' placeholder="enter note"></input>
      <h1>User: {props.userID}</h1>
    </>
  )
}

export default TextInput