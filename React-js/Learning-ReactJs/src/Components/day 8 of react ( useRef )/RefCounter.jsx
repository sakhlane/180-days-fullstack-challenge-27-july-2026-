
import { useState } from "react";
import {useRef} from "react"
function RefCounter (){
    const [count , setCount] = useState(0)
    const refNum = useRef(0)
    return (
        <>
            <h1>Reference Counter</h1>
            {/* use state counter */}
            <h2>{count}</h2>
            {/* useRef counter */}
            <h2>{refNum.current}</h2>
            <button onClick={()=>{setCount(count + 1)}}>Increment useState Counter</button>
            <button onClick={() => {refNum.current = refNum.current + 1}}>Increment useRef Counter</button>
        </>
    )
}

export default RefCounter;