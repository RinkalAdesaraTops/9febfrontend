import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import UserStore from './redux/UserStore.js'
import EmpStore from './RTK/EmpStore.js'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={EmpStore}>
    <App /> 
  </Provider> 
  // </React.StrictMode>,
)
