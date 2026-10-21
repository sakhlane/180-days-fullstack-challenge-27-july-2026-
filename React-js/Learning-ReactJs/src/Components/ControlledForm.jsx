
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

    // HANDLE ERRORS
    const [errors, setErrors] = useState({});

    function validateForm(){
        const newErrors = {};
        if(formData.name.trim() === ""){
            newErrors.name ="Nmae is required"
        }
        if(formData.phone.trim() === ""){
            newErrors.phone = "Phone number is requrired"
        }
        if(formData.email.trim()===""){
            newErrors.email = "Email is required"
        }

        setErrors(newErrors);
        return  Object.keys(newErrors).length === 0;
    }
     function handleChange(event){
        const {name , value} = event.target
        setFormData({
            ...formData,
            [name] : value
         }) 
         console.log(name,value)
     }

     function handleSubmit(e){
        e.preventDefault();

        if(validateForm()){
            
            console.log('form submitted')
           
            setFormData({
                 name: "",
                phone: "",
                email: ""
            })
        }

     }

    return (<>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name :</label>
            <input type="text" name="name" value={formData.name}  onChange={ handleChange} /> <br />
             <label htmlFor=""> Phone :</label>
            <input type="text" name = "phone" value={formData.phone} onChange={ handleChange} /> <br />
              <label htmlFor=""> Email :</label>
            <input type="email" name="email" value={formData.email} onChange={ handleChange} /> <br />
           
           <p>Name: {formData.name}</p>
            <p>Phone: {formData.phone}</p>
            <p>Email: {formData.email}</p>
            <button type="submit">submit</button>
        </form>
    </>)
}

export default ControlledForm;