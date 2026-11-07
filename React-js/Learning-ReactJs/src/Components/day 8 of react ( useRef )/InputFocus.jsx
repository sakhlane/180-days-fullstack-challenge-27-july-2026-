
import {useRef} from 'react'
function InputFocus (){

    const nameRef = useRef('')
    console.log(nameRef);
    return (
        <>
            <h1>INPUT FOCUS</h1>
            <input type="text" name="name" ref={nameRef} />
            <button onClick={()=>{nameRef.current.focus()}}>Input Focus</button>

        </>
    )

}
export default InputFocus;
