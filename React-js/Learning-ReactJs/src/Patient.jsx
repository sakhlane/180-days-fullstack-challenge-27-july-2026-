    // day 2
// 2.learning props 


/**
 * Your challenge

Write Patient so it receives:

name
age
course

Then App should send:

"Mohamed"
30
"React JS"

Display them on the page.
 */

// function Patient(props){
//     return<>
//         <h1 className="name">{props.name}</h1>
//         <h2 className="age">{props.age}</h2>
//         <h3 className="course">{props.course}</h3>
//     </>
// }

// export default Patient;

//  using desturcturing 
function Patient({name,age,course}){
    return<>
        <h1 className="name">{name}</h1>
        <h2 className="age">{age}</h2>
        <h3 className="course">{course}</h3>
    </>
}

export default Patient;

// Props + reusable components

