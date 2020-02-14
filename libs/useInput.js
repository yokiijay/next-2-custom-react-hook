import { useRef, useState, useEffect } from 'react'

// class ValueObj {
//   constructor(value, setValue, validation, setValidation){
//     this.value = value
//     this.setValue = setValue
//     this.validation = validation
//     this.setValidation = setValue
//   }
//   get(){
//     return this.value
//   }
//   set(newValue){
//     return this.setValue(newValue)
//   }
//   onChange(cb){
//     if(!cb) return
//     const result = cb(this.value)
//     // result ? this.setValidation(true) : this.setValidation(false)
//   }
// }

function useInput(ref,initialValue = '') {
  const [value, setValue] = useState(initialValue)
  const [validation, setValidation] = useState(false)

  // updateValue
  useEffect(()=>{
    ref.current.oninput = ev => {
      setValue(ev.target.value)
    }
  }, [])

  // bindValue
  useEffect(()=>{
    ref.current.value = value
  })

  
  // on value change event
  // const valueObj = new ValueObj(value, setValue, validation, setValidation)
  const valueObj = {
    get: ()=>value,
    set: (newValue)=>setValue(newValue),
    validation: ()=>validation,
    onChange: (cb)=>{
      useEffect(()=>{
        cb && cb(value) ? setValidation(true) : setValidation(false)
      }, [value])
    },
  }

  return valueObj

}

export default useInput