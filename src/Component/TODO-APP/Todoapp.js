import React, { useState } from 'react'
import Addtask from './Addtask'
import Listtask from './Listtask'
import "./Todo.css"

const Todoapp = () => {
  const [tasks ,setTask]= useState([
   
  ])
  const addTask= (title)=>{
    const newTask= [...tasks, {title}]
    console.log(newTask)
    setTask(newTask)
  }
  const removeTask=(index)=>{
    const newTask= [...tasks,]
    newTask.splice(index,1)
    setTask(newTask)
    
  }
  return (
    <>
    <div className='todo-container'>
    <div className='header'>TODO APP</div>
    <div className='add-task'>
      <Addtask addTask={addTask}/>
    </div>
    <div className='list-task'>
      {tasks.map((task,index)=>(
         <Listtask task={task}  removeTask={removeTask}
        index={index} key={index}/>
      ))}

      
     
    </div>
    </div>
    </>
  )
}
export default Todoapp