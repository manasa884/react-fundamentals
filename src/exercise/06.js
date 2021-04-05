// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  const inputRef = React.useRef(null)
  // const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  const handleChange = (e) => {
    setUsername(e.target.value.toLowerCase())
    // const isValid = e.target.value === e.target.value.toLowerCase()
    // setError(isValid ? null : 'Username must be lower case')
  }

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={inputRef} type="text" id="usernameInput" value={username} onChange={handleChange} />
      </div>
      {/* {error ? <p role="alert" style={{color: 'red'}}>{error}</p> : null} */}
      {/* <button disabled={Boolean(error)} type="submit">Submit</button> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
