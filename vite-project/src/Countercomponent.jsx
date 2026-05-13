import React, { useState } from 'react'

// hooks
const Countercomponent = ({myname}) => {
    const [name,setName] = useState(myname)
    const [age,setAge] = useState(26)
    const changeName = ()=>{
        setName("ABC")
    }
  return (
    <div>
        <h4>Name is -- {name}</h4>
        <button onClick={changeName}>CHange Name</button>
        <h4>Age is -- {age}</h4>
        <button onClick={()=>setAge(30)}>Change Age</button>
    </div>
  )
}
export default Countercomponent
