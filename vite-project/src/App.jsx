import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Countercomponent from './Countercomponent'
import Usercrud from './Usercrud'
import Empcomponent from './Empcomponent'
import Apicrud from './Apicrud'
import ClassExample from './ClassExample'
import LifecycleClass from './LifecycleClass'
import LifecycleFunc from './LifecycleFunc'
import Menu from './Menu'
import { BrowserRouter, Routes,Route } from 'react-router'
// import './App.css'

function App() {
  let name="hgjfdshg"
  return (
    <>
    <Menu />
    <BrowserRouter>
      <Routes>
          <Route path='/home' element={<Usercrud />}/>
          <Route path='/about' element={<LifecycleClass age="25"/>}/>
          <Route path='/contact' element={<LifecycleFunc />}/>
      </Routes>
    </BrowserRouter>
     <h3>React+Vite example</h3>
     {/* <Countercomponent myname={name}/> */}
     {/* <Usercrud /> */}
     {/* <Empcomponent /> */}
     {/* <Apicrud /> */}
     {/* <ClassExample /> */}
     {/* <LifecycleClass age="25"/> */}
     {/* <LifecycleFunc /> */}
    </>
  )
}

export default App
