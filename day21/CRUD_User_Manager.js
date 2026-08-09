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
    const response = await fectch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:
      JSON.stringify({
        name: "sakhlane",

      })
  })
    
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
     const data = await response.JSON()
     console.log(data)
  }
  catch(error){
    console.log(error)
  }
}

createUser();