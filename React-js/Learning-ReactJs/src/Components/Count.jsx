import { useState } from "react";
// function Count(){
//     const [count, setCount] = useState(0)

//     function handleClickIncrease(){
//         setCount(count + 1);
//     }
//       function handleClickDecrease(){
//         setCount(count - 1);
//     }
//     return <>
//         <h2>{count}</h2>
//         <button onClick={handleClickIncrease}>Increase</button>
//         <button onClick={handleClickDecrease}>Decrease</button>
//     </>
// }
// export default Count;

/**
 * DAY 3 FUNCTIONAL STATE UPDATE 
 * 

 * Don't copy a complete component yet. Write this yourself:

import { useState } from "react"

function Count() {
    // create state here

    // create increase function here

    // return h1 + two buttons
}

export default Count
Your task

Make:

Initial count = 0
Increase button → functional state update
Decrease button → functional state update
Display the count in an <h1> 
 */

// functional state update
// function Count (){
//     const [count,setCount] = useState(0)
//     function increase(){

//         setCount(preVal => preVal + 1);
//     }
//      function decrease (){

//         setCount(preVal => preVal - 1);
//     }

//     return <>
//         <h1>{count}</h1>
//         <button onClick={increase} className="increaseBtn">Increase</button>
//         <button  onClick={decrease} className="decreaseBtn">Decrease</button>
//     </>
// }
// export default Count ;

// USING ARROW FUNCTION

function Count() {
  const [count, setCount] = useState(0);

  function changeCount(val) {
    setCount((preVal) => preVal + val);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick= {()=>changeCount (1)} className="increaseBtn">Increase</button>
      <button onClick={()=>changeCount (-1)} className="decreaseBtn">Decrease</button>
    </>
  );
}
export default Count;
