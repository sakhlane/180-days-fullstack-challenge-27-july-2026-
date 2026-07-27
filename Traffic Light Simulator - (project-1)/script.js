console.log('first project');

// select the lights 
const redLight = document.querySelector("#red")
const yellowLight = document.querySelector("#yellow")
const greenLight = document.querySelector("#green")

// function turn off all lights
function turnOff(){
    redLight.style.opacity= 0.2;
    yellowLight.style.opacity= 0.2;
    greenLight.style.opacity= 0.2;
}
turnOff();

// function red
function red(nextLight){
    console.log('Red light ON')
    turnOff();
    redLight.style.opacity= 1;
   redLight.style.boxShadow = "0 0 30px red";
    setTimeout(()=>{
        nextLight(green);
    },3000)
}

// function yellow
function yellow(nextLight){
    console.log('Yellow light ON')
    turnOff();
    yellowLight.style.opacity = 1;
    yellowLight.style.boxShadow = "0 0 30px yellow";
    
    setTimeout(()=>{
        nextLight(red);
    },1000)
}

// function green
function green(nextLight){
    console.log('Green light ON')
     turnOff();
    greenLight.style.opacity = 1;
    greenLight.style.boxShadow = "0 0 30px green";
    setTimeout(()=>{
        nextLight(yellow);
    },3000)
}

red(yellow);