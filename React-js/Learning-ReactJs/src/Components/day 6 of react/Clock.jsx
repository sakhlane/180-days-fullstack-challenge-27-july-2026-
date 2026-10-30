import {useState , useEffect} from "react";
function Clock (){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)

        // cleanup Code
        return ()=>{
            clearInterval(timer);
        }
    },[])
    return (<>
        <h1>Digital Clock</h1>
        <h2>{time}</h2>
    </>)
}

export default Clock;