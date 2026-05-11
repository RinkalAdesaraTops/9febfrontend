import React from 'react'

// const Secondcomponent = (props) => {
const Secondcomponent = ({myname,age,mydata}) => {
  return (
    <>
    <div>
      <h3>Second component created</h3>
      <h4>Name is -- {myname}</h4>
      <h4>Age is -- {age}</h4>
      <ul>
        {
            mydata.map((i)=>{
                return <li>{i}</li>
            })
        }
      </ul>
      {/* <h4>Name is -- {props.myname}</h4>
      <h4>Age is -- {props.age}</h4> */}
    </div>
    </>
  )
}

export default Secondcomponent
