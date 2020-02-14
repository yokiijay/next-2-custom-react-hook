import { useState, useRef } from 'react'
import useInput from '../libs/useInput'

const Index = () => {
  const usernameRef = useRef(null)
  const hobbyRef = useRef(null)

  const [username, setUsername] = useInput(usernameRef)
  const [hobby, setHobby] = useInput(hobbyRef)

  const handleSubmit = () => {}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        username:
        <input type='text' ref={usernameRef} /> <br />
        hobby:
        <input type='text' ref={hobbyRef} /> <br />
        <button>Submit</button>
      </form>
      <h5>{username}</h5>
      <h5>{hobby}</h5>
    </div>
  )
}

export default Index
