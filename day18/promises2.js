/**
 * 🟢 Real-World Challenge 1 – Login

Create a function:

function login() {

}
Requirements
Return a Promise.
Wait 2 seconds.
Resolve with:
"Mohamed"

Then call:

login()

Use .then() to print:

Welcome Mohamed
 */

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mohamed")
        }, 2000)
    })
}
login()
    .then((data) => {
        console.log(`Welcome ${data}`);
    })

/**🚀 Challenge 2

This one is intentionally a little harder because it combines everything you've learned.

Create:

function login()

Returns after 2 seconds:

"Mohamed"

Create:

function getProfile(name)

Returns after 2 seconds:

{
    name: name,
    age: 30,
    role: "Developer"
}

Then chain them:

login()
    .then((name) => {
        return getProfile(name);
    })
    .then((profile) => {
        console.log(profile.name);
        console.log(profile.age);
        console.log(profile.role);
    });

Expected output:

Mohamed
30
Developer */

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mohamed")
        }, 2000)
    })
}

function getProfile(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: name,
                age: 30,
                role: "Developer"

            })
        }, 2000)
    })
}
login()
    .then((name) => {
        return getProfile(name)
    })
    .then((profile) => {
        console.log(profile.name)
        console.log(profile.age)
        console.log(profile.role)
    })

    /**
     * Instead of giving you another similar exercise, let's make it feel like a real application.

You'll build:

login()
      ↓
getProfile()
      ↓
getSkills()
      ↓
displaySkills()

This will involve three Promises chained together.
     */

// login function
function login(){
    return new Promise((resolve,reject)=>{
        resolve("Mohamed")
    })
}

// getProfile function
function getProfile(name){
    return new Promise((resolve,reject)=>{
        resolve({
            name: name,
            age: 30,
            role : 'developer'
        })
    })
}

// getskills function
function getSkills(){
    const skills = ["HTML","CSS","JavaScript"]
    return new Promise((resolve,reject)=>{
        resolve(skills)
    })
}

// displaySkills function
function displaySkills(skills){
    skills.forEach(element => {
        console.log(element)
    });
}

login()
.then((name)=>{
    return getProfile(name)
})
.then((data)=>{
    console.log(data);
    return getSkills()
})
.then((skills)=>{
   displaySkills(skills);
})