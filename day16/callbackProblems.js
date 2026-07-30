/**
 * Problem 1 (Easy)

Create a callback-based calculator.
 */

function calculate (a,b,oparation) // a and b are parameter and oparation is callback function
{ 
   return oparation(a,b);
}

// add function 
function add(a,b){
    return a + b;
}

// function subtraction
function sub(a,b){
    return a - b;
}

// function multiplication
function mul(a,b){
    return a * b;
}

const addResult = calculate( 5,10,add)
console.log(addResult);
const subResult = calculate(10,5,sub)
console.log(subResult);
const mulResult = calculate(5,10,mul)
console.log(mulResult);

/**
 * Callback Problem 2 – Welcome User
Problem Statement

Create a function that welcomes a user after 2 seconds using a callback.

Expected Output
Loading...
(wait 2 seconds)
Welcome Mohamed!
 */
// version 1
function welcome(){
    console.log("Loading....");
    console.log("(wait 2 seconds)")
    setTimeout(()=>{
        console.log("Welcome Mohamed")
    },2000)
}
welcome();

// version 2 
function greet(name) {
    console.log("Welcome " + name);
}

function welcomeUser(name, callback) {
    console.log("Loading...");

    setTimeout(() => {
        callback(name);
    }, 2000);

    console.log("Done");
}

welcomeUser("Mohamed", greet);