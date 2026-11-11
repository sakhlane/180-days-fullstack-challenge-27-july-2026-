import {useState , useRef , useEffect} from 'react';
function StopWatch () {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const  timeRef = useRef(null)
    const secondsRef = useRef(seconds);
    // function start Timer 
     function startTimer (){
        if(timeRef.current !== null){
            return ;
        }
         timeRef.current = setInterval(()=>{
            setSeconds((preSec) => {  
                 if(preSec === 59){
                 return 0;
            }
              return   preSec + 1 } )
              
              if(secondsRef.current === 59){
                  setMinutes((preMin) => preMin + 1);
                  setSeconds(0)
              }
        },1000)
         
     }
    
     function stopTimer(){
        clearInterval(timeRef.current);
        timeRef.current = null;
     }
       
    return (
        <>
            <h1>STOP WATCH</h1>
            <h1>{minutes} : {seconds}</h1>
            <button onClick={startTimer} >Start</button>
            <button>Reset</button>
            <button onClick={stopTimer}>Stop</button>
        </>   
    )
}
export default StopWatch;