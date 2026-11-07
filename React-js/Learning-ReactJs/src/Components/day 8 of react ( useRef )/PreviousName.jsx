
/**
 * Build the PreviousName component with:
1. useState("Ali") for the current name.
2. useRef("") for the previous name.
3. A controlled input to change the name.
4. useEffect to update the previous-name ref.
5. Display both names.
 */

import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
function PreviousName () {
    const [name,setName] = useState("")
    const previousName = useRef("");

    useEffect(()=>{
        previousName.current = name;
    },[name])
    return (
        <>
            <h1>PREVIOUS NAME</h1>
            <h2>preName : {previousName.current}</h2>
            <h2>updated Name : {name}</h2>
            <input type="text" value = {name} onChange={(event)=>setName(event.target.value)}  />
        </>
    )
}

export default PreviousName;