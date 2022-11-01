import { createSlice } from "@reduxjs/toolkit"
import React from "react"



const initialState =[]
export const taskSlice= createSlice({
    name:'task',
    initialState,
    reducers:{
      addTask:(state, action) => {
        state=state.push(action.payload)
      },
      deleteTask:(state,action)=>{
      return state.filter((el)=> el.id !== action.payload.id)
    },
    updateTask:(state,action) =>{
      return state.map((el)=>el.id === action.payload.id ? action.payload :el)
},
  },
    
})
export const{addTask,deleteTask,updateTask}=taskSlice.actions
export default taskSlice.reducer