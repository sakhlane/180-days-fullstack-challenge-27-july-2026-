import {useState} from 'react';

function   CharacterCounter(){
    const maxLength = 10;
    const [text , setText ] = useState("")
    function textChange(event){
        // console.log('event.target.value');
        setText(event.target.value)
        
    }
    return (<>
        <h1>CHARACTER COUNTER</h1>

        <textarea name="messegeText" onChange={textChange} value = {text} maxLength={10}></textarea>
        {/* <h2>Count: {text.length}  and {text.length} / {maxLength}</h2>  
         {text.length >= 10 && "charater limit is over "} */}
        <h2>Character Used : {text.length} / {maxLength}</h2>
        <h2>Remaining Character : {maxLength - text.length}</h2>
        <h2>{text.length >= maxLength && "Character Limit is Over"}</h2>
    </>)
}

export default CharacterCounter;