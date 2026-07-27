// important notes 

/** 
 🚀 What is a Callback Function?

Definition:

A callback function is a function that is passed as an argument to another function so it can be executed later.

The important words are:

passed as an argument
executed later
 */

// question 1

function welcome() {
    console.log("Welcome");
}

function execute(fn) {
    fn();
}

execute(welcome);

// ans :- Welcome 

// question 2
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Ali");
}

processUser(greet);

// ans:- Hello Ali