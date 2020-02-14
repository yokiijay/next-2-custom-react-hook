import { useRef, useState, useEffect } from 'react'

function useInput(ref,initialValue = '') {
  const [value, setValue] = useState(initialValue)

  useEffect(()=>{
    ref.current.oninput = ev => {
      setValue(ev.target.value)
    }
  }, [])

  useEffect(()=>{
    ref.current.value = value
  })

  return [value, setValue]
}

export default useInput