/**
 * 🧩 Mini CRUD Exercise — User Manager

We'll use this API:

https://jsonplaceholder.typicode.com/users
Your task

Create 4 functions:

1️⃣ CREATE — createUser()

Send a POST request with:

{
  name: "Mohamed",
  email: "mohamed@example.com",
  role: "Frontend Developer"
}

Requirements:

method: "POST"
Content-Type: application/json
JSON.stringify()
await
response.json()
try/catch

2️⃣ READ — getUsers()

Send a GET request.

Requirements:

Fetch all users
Convert response to JSON
console.log() the users
Use try/catch

3️⃣ UPDATE — updateUser()

Update only the user's name for user 1:

{
  name: "Mohamed Pasha"
}

Requirements:

PATCH
Content-Type: application/json
JSON.stringify()
try/catch

4️⃣ DELETE — deleteUser()

Delete user 1.

Requirements:

DELETE
try/catch
Check response.ok
 */

// 1️⃣ CREATE — createUser()

async function createUser() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:
      JSON.stringify({
        name: "sakhlane",
        email: "mohamed@example.com", 
        
        role: "Frontend Developer"

      })
  })
    
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
     const data = await response.json()
     console.log(data)
  }
  catch(error){
    console.log(error)
  }
}

createUser();

// 2️⃣ READ — getUsers() 
  async function getuUsers(){
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
       if(!response.ok){
        throw new Error ("users not found")
       }
       const data = await response.json();
       console.log(data);

    }
    catch(error){
      console.log(error)
    }
  }

  getuUsers();

  // 3️⃣ UPDATE — updateUser()
   
  async function updateUser(){
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1",{
        method: "PATCH",
        headers : {
          "Content-Type": "application/json"
        },
        body: 
          JSON.stringify({
            name: "pasha"
          })
        
      })
      if(!response.ok){
        throw new Error ("user not found")
      }
      const data = await response.json();
      console.log(data)
    }
    catch(error){
      console.log(error)
    }
  }

updateUser()

// 4️⃣ DELETE — deleteUser()

async function deleteUser(){
  try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1",{
        method: "DELETE",
     
      })
        if(!response.ok){
          throw new Error("user not found")
        }
     
      console.log("user delete successfull")
  }
  catch(error){
    console.log(error)
  }
}

deleteUser()

// 5 put method
async function updateUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "Mohamed Pasha",
                    username: "mohamed123",
                    email: "mohamed@example.com"
                })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to update user");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

updateUser()

/**
 * 
 * 🧠 Remember this for interviews
Method	   Purpose
POST	     Create
GET	       Read
PUT	       Replace/update entire resource
PATCH	     Partially update
DELETE	   Delete
 */