
import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import Todolist from './Todolist'

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
    <Todolist Arrayoflist = {todos} toggle = {toggleTodos} remove = {deletetodos} />
    </>
  )
}

export default App
