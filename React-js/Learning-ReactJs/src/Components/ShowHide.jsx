import { useState } from "react";

// USING SIMPLE STYLE 
function ShowHide(){
    const [show ,setShow] = useState(true)
        function handleChange(){
            // setShow((true)=>{})
            setShow((pre) => !pre);
        }
    return (<>
        <p className="para" style={{display:show ? "block" : "none"}}>Welcome To React Js </p>
        <button className="toggle" onClick={handleChange}> {show ? "Hide Details" : "Show Details"}</button>
    </>)
}

export default ShowHide;