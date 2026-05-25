import React, { useEffect, useState } from 'react'

const LifecycleFunc = () => {
    const [name,setName] = useState('Test')
    useEffect(()=>{
        setTimeout(()=>{
            setName('abc')
        },3000)
    })

  return (
    <div>
      <h3>Name is -- {name}</h3>
    </div>
  )
}

export default LifecycleFunc
