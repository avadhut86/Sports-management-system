
import { useState } from 'react'
import './App.css'

function App() {

  const [name,setName] = useState("")
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
  
  function handleSubmit (e){     //Submit button
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id:crypto.randomUUID(),
          title:name,
          completed:false
        }
      ]
    } )

    setName("")
    console.log(todos);
  }
  return (
    <>
    <h1>Todo list</h1>
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter Here' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <button type='submit'>Submit</button>
    </form>

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

      {/* <li>
        <label htmlFor=""> <input type="checkbox"/>Task 2 </label>
        <button>Delete</button>
      </li>
      
      <li>
        <label htmlFor=""> <input type="checkbox"/>Task 3 </label>
        <button>Delete</button>
      </li>
      
      <li>
        <label htmlFor=""> <input type="checkbox"/>Task 4 </label>
        <button>Delete</button>
      </li>
       */}
      
    </ul>
    </>
  )
}

export default App
