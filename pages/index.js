import { useState, useRef, useEffect } from 'react'
import useInput from '../libs/useInput'
import useTitle from '../libs/useTitle'

const Index = () => {
  useTitle('Use Input')

  const usernameRef = useRef(null)
  const hobbyRef = useRef(null)

  const username = useInput(usernameRef)
  const hobby = useInput(hobbyRef)

  username.onChange(value=>{
    return /^\w{6,12}$/.test(value)
  })

  hobby.onChange(value=>{
    return /^([a-zA-z]+\,?\s?)+$/.test(value)
  })

  const handleSubmit = ev=>{
    ev.preventDefault()
    username.set('')
    hobby.set('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        username:
        <input type='text' placeholder='6-12位英文或数字' ref={usernameRef} /> {username.validation() ? '✅' : '❌'} <br />
        hobby:
        <input type='text' placeholder='英文 并用逗号隔开' ref={hobbyRef} /> {hobby.validation() ? '✅' : '❌'}<br />
        <button>Reset</button>
      </form>
      <h5>用户名：{username.get()}</h5>
      <h5>爱好：{hobby.get()}</h5>
    </div>
  )
}

export default Index
