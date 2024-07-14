
import { useState } from 'react'
import './App.css'

function App() {

  const [name,setName] = useState("")
  const [num,setNum] = useState("123")

  const [todos,setTodos] = useState([])

  function myfunc(){
    setName("Hello")
  }

  function myfunc1(){
    setNum("456")
  }

  
  return (
   <div>
    <h1>TODO LIST {name}</h1>
    <form onSubmit={(e) =>{
     e.preventDefault();
     setTodos([
      {title: name}
     ])
     console.log(todos)
    }}>
    <input type="text" placeholder='Enter here' value={name} 
    onChange={(e) => 
      setName(e.target.value)}
    /> <br />
    <button type='submit'>Add Todo</button>
    </form>
    <p>Todo - List {num}</p>
    <input type="checkbox" />
   <h1> {todos.length}</h1>
   {todos.length > 0 && <ul>
      <li className='task'><label htmlFor=""><input type="checkbox" />{todos[0].title}</label><button className='btn' onClick={myfunc1}>Delete</button></li>
      {/* <li className='task'><label htmlFor=""><input type="checkbox"/>{todos[1]}</label><button className='btn'>Delete</button></li> */}
    </ul>}
    
    
   </div>
  )
}

export default App
