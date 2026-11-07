// import { useState } from 'react';
import { useEffect } from 'react';
import { useRef} from 'react';
function AddmissionForm () {
    // const [name,setName] = useState("");
    const nameRef = useRef(null)
   
    useEffect(()=>{
        nameRef.current.focus();
        
    },[])
    return (
        <>
            <h1>ADDMISSION FORM</h1>
            <form action="#">
                <label htmlFor="name">Name :</label>
                <input type="text" ref={nameRef}  id='name' />
                <label htmlFor="age">age:</label>
                <input type="text" id="age"   />
            </form>
        </>
    )
}

export default AddmissionForm;