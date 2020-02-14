import { useState } from "react"
import useInput from "../libs/useInput"


const Index = () => {
  const [username, bindUsername, resetUsername] = useInput('')
  const [hobby, bindHobby, resetHobby] = useInput('')

  function handleSubmit(ev){
    ev.preventDefault()
    alert(`The username is ${username}, his hobby is ${hobby}`)
    resetUsername()
    resetHobby()
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        username:<input type="text" {...bindUsername} /> <br/>
        hobby:<input type="text" {...bindHobby} /> <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Index