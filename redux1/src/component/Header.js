import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { addTask } from "../Redux/taskSilce";



const Header = ()=>{
    const [newTask, setNewTask]= useState({title:""});
    const dispatch=useDispatch()
    return(
        <div className='header'>
            <input type="text" placeholder='TODO content' onChange={(e)=>setNewTask({...newTask,title:e.target.value})}/>
            <button onClick={()=>dispatch(addTask(({...newTask,isDone:false,id:Math.floor(Math.random()*100000000000)})))}>Add</button>
        </div>
    )
}
export default Header