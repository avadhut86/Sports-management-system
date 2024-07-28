import React from 'react'
import Singlelist from './Singlelist'

const Todolist = ({Arrayoflist,toggle,remove}) => {
  return (
    <ul>
    {Arrayoflist.map( x => {
     return (
       <Singlelist y = {x} switches ={toggle} delete1 = {remove}/>
     )
    })   }
       
     </ul>
  )
}

export default Todolist