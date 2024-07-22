import React, { useState } from 'react'

const TodoForm = ({addTodos}) => {
const [name,setName] = useState("")

function handleSubmit (e){     //Submit button
    e.preventDefault();
    
    addTodos(name)
    setName("")
    
  }
  return (
    <form action="" onSubmit={handleSubmit}>
    <input type="text" placeholder='Enter Here' value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <button type='submit'>Submit</button>
  </form>
  )
}

export default TodoForm