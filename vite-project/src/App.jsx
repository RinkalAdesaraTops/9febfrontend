import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Countercomponent from './Countercomponent'
import Usercrud from './Usercrud'
// import './App.css'

function App() {
  let name="hgjfdshg"
  return (
    <>
     <h3>React+Vite example</h3>
     {/* <Countercomponent myname={name}/> */}
     <Usercrud />
    </>
  )
}

export default App
