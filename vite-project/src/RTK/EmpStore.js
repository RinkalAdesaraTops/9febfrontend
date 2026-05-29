import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import EmpReducer from './EmpReducer'
const EmpStore = configureStore({
    reducer:{
        Emp:EmpReducer
    }
})

export default EmpStore
