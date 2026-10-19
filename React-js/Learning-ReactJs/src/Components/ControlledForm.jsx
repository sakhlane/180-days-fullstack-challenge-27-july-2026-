
/**
 * Practice 2 — Build a name-and-phone form
Create a React component with two controlled inputs:
1. Patient name
2. Phone number
Requirements:
- Use useState to store both fields.
- Use value and onChange for each input.
- Display the entered name and phone number below the form.
- Use one handleChange function for both inputs.
 */

import {useState} from 'react';
function ControlledForm(){

    const [formData, setFormData] = useState({
        name : "",
        phone : "",
        email : ""
    })

     function handleChange(event){
        const {name , value} = event.target
        setFormData({
            ...formData,
            [name] : value
         }) 
     }

     function handleSubmit(e){
        e.preventDefault();

        console.log('form submitted')
     }

    return (<>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name :</label>
            <input type="tex" value={formData.name}  onChange={(e)=> handleChange(e.target.value)} /> <br />
             <label htmlFor=""> Phone :</label>
            <input type="text" value={formData.phone} onChange={(e)=> handleChange(e.target.value)} /> <br />
              <label htmlFor=""> Email :</label>
            <input type="email" value={formData.email} onChange={(e)=> handleChange(e.target.value)} /> <br />
            <button type="submit">submit</button>
        </form>
    </>)
}

export default ControlledForm;