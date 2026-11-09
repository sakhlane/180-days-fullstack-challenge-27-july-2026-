
/**
 * Build the PreviousName component with:
1. useState("Ali") for the current name.
2. useRef("") for the previous name.
3. A controlled input to change the name.
4. useEffect to update the previous-name ref.
5. Display both names.
 */
import {useState} from 'react';
import {useRef} from 'react';
import { useEffect } from 'react';
function PreviousName () {
    const [name , setName] = useState('');

    const nameRef = useRef('')
    const oldName = nameRef.current;

    const domRef = useRef(null)

    console.log(nameRef)

    useEffect(()=>{
        nameRef.current = name;
    },[name])

    return (
        <>
            <h1>PREVIOUS NAME</h1>
            <h2>Previous Name : {oldName} </h2>
            <h2>New Name : {name}</h2>
            <input ref = {domRef} type="text" value = {name} onChange={(event)=> setName(event.target.value)}/>
            <button onClick={()=>domRef.current.focus()}>input focus</button>
        </>
    )
}

export default PreviousName;