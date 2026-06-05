import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RefExample from './RefExample'
import ContextExample from './ContextExample'
import UsecontextExample from './UsecontextExample'
import ApiExample from './ApiExample'
import CrudComponent from './CrudComponent'
import Memoexample from './Memoexample'

function App() {
  const [status,setStatus] = useState(1)
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
      {/* <ApiExample /> */}
      {/* <CrudComponent /> */}
      {
        (status)?<Memoexample />:<CrudComponent />
      }
    </>
  )
}

export default App
