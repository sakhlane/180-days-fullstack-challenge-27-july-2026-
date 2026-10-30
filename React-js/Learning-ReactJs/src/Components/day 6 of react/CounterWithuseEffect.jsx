
import { useState , useEffect } from "react";

function CounterWithuseEffect(){
    const [count, setCount] = useState(0);
    // function increment 
    function increment(){
        setCount((pre) => pre + 1);
    }

    function decrement (){
        setCount((pre)=>{ return pre - 1})
    }

    // useEffect 
    useEffect(()=>{
        document.title = `Count : ${count}`
    })


    return (<>
        <h1>Count : {count}</h1>
        <button onClick={increment} >Increment</button>
        <button onClick={decrement} >Decrement</button>
    </>)
}   

export default CounterWithuseEffect;