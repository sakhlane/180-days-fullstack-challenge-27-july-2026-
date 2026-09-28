import { useState } from "react";

// function ControledInput (){
//     const [name,setName] = useState("");

//     return <>
//         <h1>Hello{name}</h1>
//         <input value={name} onChange={(e)=> setName( e.target.value)} type="text" className="stuName" />
//     </>
// }

// export default ControledInput;

// USING FORM DATA 
function ControledInput(){
    const [formData , setFormData] = useState({
        name : "",
        phone : ""
    })

    return <>
        <input value={formData.name} type="text" className="name" onChange={(e)=> setFormData(preVal => ({...preVal, name:e.target.value}))}/>
        <input value={formData.phone} type="text" className="phone" onChange={(e)=> setFormData(preVal => ({...preVal , phone:e.target.value}))} />
    </>
}   
export default ControledInput;

function ControlledForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: ""
    });

    function handleChange(e) {
        // try to update the correct property here
        setFormData(preVal => ({...preVal , [e.target.name] : e.target.value}))
    }

    return (
        <>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
        </>
    );
}