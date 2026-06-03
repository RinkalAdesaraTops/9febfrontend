import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RefExample from './RefExample'
import ContextExample from './ContextExample'
import UsecontextExample from './UsecontextExample'
import ApiExample from './ApiExample'

function App() {
  return (
    <>
    {/* useState & useEffect
      useref
      usecontext - props drilling problem
      usecallback usememo
      custom hooks
    */}
      <h3>Hooks Example</h3>
      {/* <RefExample /> */}
      {/* <ContextExample /> */}
      {/* <UsecontextExample /> */}
      <ApiExample />
    </>
  )
}

export default App
