import React, {useState} from "react";

const SamplePage = () =>{

    const [counter,setCounter] = useState(0);

    const handle = () => setCounter(counter+1);
    return (
        <>
        <button onClick={handle}>Click Me</button>
        <div>{counter}</div>
        </>
    )
}