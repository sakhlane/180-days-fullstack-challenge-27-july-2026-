// question 1.
console.log('step 1');
console.log('step 2');
console.log('step 3');

/**
 * Quiz 1

1. What type of execution is this?

A) Async 

B) Sync

ans :- Sync
 */


// question 2.
console.log("Start");

setTimeout(function () {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");

/**
  output is :-
  Start 
  End  
  Inside setTimeout
 */

//   q3
  console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

/**
 ans:- 
   A
   C
   B
 */

//    question4
   console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000);

console.log("3");

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5");

/**
 * answer:-
  1 3 5 4 2
 */

//   question 5

console.log("Start");

setTimeout(() => {
    console.log("A");
}, 3000);

setTimeout(() => {
    console.log("B");
}, 1000);

setTimeout(() => {
    console.log("C");
}, 2000);

console.log("End");

/**
  ans : Start End B C A
 */