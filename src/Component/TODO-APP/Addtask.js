import React, {useState } from 'react'

const Addtask= (props)=>{
    const [value,setValue]= useState('')

    const addItem = ()=>{
      props.addTask(value)
  }
   return(
   <>
     <div className='input-container'>
        <input type="text" className='input' placeholder='Add a new task...' value={value}
        onChange={(e)=>{ setValue( e.target.value)
        }}/>
        <button onClick={addItem} className='add-btn'>ADD</button>
    </div>
        
    </>
  )
}
export default Addtask;