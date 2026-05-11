import React from 'react'
import './style.css'
const Thirdcomponent = () => {
    const myStyle = {
        color:"blue",
        backgroundColor:"aqua",
        fontSize:"20px",
        fontFamily:"Arial Black"
    }
  return (
    <div>
      <h3>Third Component called...</h3>
      <h4 style={{color:'red',backgroundColor:'yellowgreen'}}>Hello</h4>
      <h4 style={myStyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni quasi iure, blanditiis, eaque eum rerum ipsam dicta reiciendis dolores ut, voluptatum vel neque molestiae sunt eveniet facilis optio temporibus!</h4>
      <div className="box"></div>
    </div>
  )
}
export default Thirdcomponent
