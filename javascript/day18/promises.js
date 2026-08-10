/**
 * 
 * Here are coding exercises from easy → hard, covering only what you've learned so far (new Promise, resolve, reject, .then(), returning values, and Promise chaining).
 */

/**
 * 🟢 Level 1 – Create Basic Promises
Question 1

Create a Promise that immediately resolves with:

"Hello World"

Then print it using .then().
//  */ 

// creating prominse
const hello = new Promise ((resolve,reject) =>{
    resolve('Hello World')
})  
hello.then((data)=>{
    console.log(data);
})

//question 2
/**
 * 🟢 Question 2 – Create a Promise
Task

Create a Promise named:

agePromise

It should resolve with the value:

30

Then use .then() to print:

30
 */

const agePromise = new Promise((resolve,reject)=>{
    resolve(30)
})

agePromise.then((data)=>{
    console.log(data);
})

/**
 * 🟢 Question 3 (Slightly More Challenging)

Now let's make the resolved value an object.

Task

Create a Promise named:

const userPromise

It should resolve with:

{
    name: "Mohamed",
    age: 30
}

Then use .then() to print only the name.

Expected Output
Mohamed
 */

const userPromise = new Promise((resolve,reject)=>{
    resolve({
        name: "Mohamed",
        age: 30
    })
})

userPromise.then((data)=> {
    console.log(data.name)
})

/**
 * 🟢 Question 4 (A little more challenging)

Now let's use an array.

Write code that:

Creates a Promise named skillsPromise.
Resolves with:
["HTML", "CSS", "JavaScript"]
Uses .then() to print only:
CSS
 */

const skillsPromise = new Promise((resolve,reject)=>{
    const skills = ["HTML", "CSS", "JavaScript"]
    resolve(skills)
})

skillsPromise.then((data)=>{
    console.log(data[1])
})

/**
 * 🟡 Question 5 (First Asynchronous Promise)

Now we'll make the Promise asynchronous using setTimeout().

Task

Create a Promise named:

loginPromise

Requirements:

Wait 2 seconds using setTimeout().
Then:
resolve("Login Successful");

Finally, use .then() to print:

Login Successful

💡 Hint: Put resolve() inside the setTimeout() callback.
 */

const loginPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
         resolve('Login Successfull')   
    }, 2000);
})

loginPromise.then((data)=>{
    console.log(data)
})

/**
 * 🟢 Question 6 (Slightly More Realistic)

Now let's simulate getting user information after 3 seconds.

Task

Create a Promise named:

userInfoPromise

After 3 seconds, resolve this object:

{
    username: "Mohamed",
    role: "Developer"
}

Then use .then() to print only:

Developer
 */

const userInfoPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            username: "Mohamed",
             role: "Developer"
        })
    },3000)
})

userInfoPromise.then((data)=>{
    console.log(data.role);
})

/**
 * Question 7

Create a Promise that resolves with:

10

Then:

First .then()
Add 5
Return the result.
Second .then()
Multiply the received value by 2
Return the result.
Third .then()
Print the final value.
Expected Output
30
 */

const resolve10 = new Promise((resolve,reject)=>{
    resolve(10)
})
resolve10.then((val)=>{
    return val + 5
})
.then((val)=>{
   return  val * 2 
})
.then((val)=>{
    console.log(val)
})