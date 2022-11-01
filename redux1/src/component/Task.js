import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { deleteTask, updateTask } from "../Redux/taskSilce";


const Task=({task})=>{
    const dispatch=useDispatch()
    const [onUpdate, setOnUpdate]=useState(false);
    const [newTask, setNewTask]=useState(task);
    return(
        <div
        className={`task ${task.isDone ? 'done' : 'notdone'}`}
        onClick={()=>dispatch(updateTask({...newTask, isDone:!task.isDone}))}>
        {onUpdate
        ? <><input type={"text"} defaultValue={task.title} onChange={(e)=>setNewTask({...newTask,title:e.target.value})}/>
        <button onClick={()=>{dispatch(updateTask(newTask));setOnUpdate(false)}}>Confirm</button>
        <button onClick={()=>setOnUpdate(false)}>Cancel</button>
        </>
        : <><h3>{task.title}</h3>
        <button onClick={()=>setOnUpdate(true)}>update</button>
        <button onClick={()=>dispatch(deleteTask(task))}>X</button>
        </>
        }
        </div>
    )
};
export default Task