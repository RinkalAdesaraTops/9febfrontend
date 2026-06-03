import React, { useRef, useState } from 'react'

const RefExample = () => {
    const [count,setCount] = useState(0)
    // let a=10
    let a=useRef(10)
    const addCounter = ()=>{
        setCount(count+1)
         a.current =a.current+1
        console.log(a);        
    }
  return (
    <div>
      <h4>Count is -- {count}</h4>
      <h4>A is -- {a.current}</h4>
      <button onClick={addCounter}>Add</button>
    </div>
  )
}

export default RefExample
