'use client';

const MyAuth = (props) => {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder="username"></input>
        <input type='text' placeholder="password"></input>
        <button type='submit'>Log In</button>
      </form>
    </>
  )
}

export default MyAuth