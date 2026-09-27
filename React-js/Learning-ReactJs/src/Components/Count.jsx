import { useState } from "react";
function Count(){
    const [count, setCount] = useState(0)

    function handleClickIncrease(){
        setCount(count + 1);
    }
      function handleClickDecrease(){
        setCount(count - 1);
    }
    return <>
        <h2>{count}</h2>
        <button onClick={handleClickIncrease}>Increase</button>
        <button onClick={handleClickDecrease}>Decrease</button>
    </>
}
export default Count;