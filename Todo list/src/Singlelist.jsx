import React from 'react'

const Singlelist = ({y,switches,delete1}) => {
  return (
    <li key={y.id}>
    <label htmlFor=""> <input type="checkbox" checked={y.completed} onChange={(e)=>switches(y.id,e.target.checked)}/>{y.title} </label>
    <button onClick={() => delete1(y.id)}>Delete</button>
  </li>
  )
}

export default Singlelist