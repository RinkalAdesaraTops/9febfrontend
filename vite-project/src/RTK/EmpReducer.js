import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
    data:[]
}
const EmpReducer = createSlice({
    name:'Emp',
    initialState,
    reducers:{
        addFun:(state,action)=>{
            state.data = [
                ...state.data,
                action.payload
            ]
        },
        deleteFun:(state,action)=>{
            state.data = state.data.filter((i,index)=>index != action.payload)
        },
        updateFun:(state,action)=>{
            state.data = state.data.map((i,index)=>{
                    if(index == action.payload.id){
                        i = action.payload.data
                    }
                    return i
            })
        }
    }
})

export const {addFun,updateFun,deleteFun} = EmpReducer.actions
export default EmpReducer.reducer
