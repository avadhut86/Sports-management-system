
import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'

function App() {

  function addTodos(avadhut){
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id:crypto.randomUUID(),
          title:avadhut,
          completed:false
        }
      ]
    } )
  }
  
  const [todos, setTodos] = useState([])

  function deletetodos(id){   //Delete button function
    setTodos(currentTodos => {
      return currentTodos.filter(x => x.id !== id )
    })
  }

  function toggleTodos(id,completed){  //Check box
    setTodos(currentTodos => {
      return currentTodos.map(x => {
        console.log(x, id, completed) 
        if(x.id == id){
          return {...x,completed}
        }
         return x
      })
    }) 
  }
  
 
  return (
    <>
    <h1>Todo list</h1>
   <TodoForm addTodos = {addTodos}/>

    <h1>Todo list</h1>
    <ul>
   {todos.map( x => {
    return (
      <li key={x.id}>
        <label htmlFor=""> <input type="checkbox" checked={x.completed} onChange={(e)=>toggleTodos(x.id,e.target.checked)}/>{x.title} </label>
        <button onClick={() => deletetodos(x.id)}>Delete</button>
      </li>
    )
   })   }
      
    </ul>
    </>
  )
}

export default App
