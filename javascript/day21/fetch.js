/**
 * 
 * 🧠 What is JSON?

JSON = JavaScript Object Notation

It's a standard text/data format used to exchange data between a frontend and backend.

For example, an API might send:

{
  "name": "Mohamed",
  "age": 30,
  "role": "Developer"
}

It looks very similar to a JavaScript object:

const user = {
  name: "Mohamed",
  age: 30,
  role: "Developer"
};

But JSON is not a JavaScript object. JSON is a string format used for transferring/storing data.

🔄 JSON ↔ JavaScript

JavaScript provides two important methods:

JSON → JavaScript object

const jsonData = '{"name":"Mohamed","age":30}';

const user = JSON.parse(jsonData);

console.log(user.name);

Output:

Mohamed

JavaScript object → JSON

const user = {
  name: "Mohamed",
  age: 30
};

const jsonData = JSON.stringify(user);

console.log(jsonData);

Result:

{"name":"Mohamed","age":30}
🔥 And this connects directly to fetch()

Remember our previous code:

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
      return response.json();
  })
  .then(data => {
      console.log(data);
  });

Here:

response.json()

reads the response body and parses the JSON into a JavaScript value.

And importantly:

response.json() returns a Promise.

------------------------------------------------------------------------
One thing to memorize
JSON.parse()       JSON → JavaScript
JSON.stringify()   JavaScript → JSON

response.json()    Response body → JavaScript data
 */

// 1 promise version

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("Request failed");
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error.message);
  });

//  2 using async await with error handling 

async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getUsers();

// HTTP Methods 
/**
 * Now we'll learn how frontend applications actually send and modify data:

Method	           Purpose
GET	                Get data
POST	            Create data
PUT	                Replace/update data
PATCH	            Partially update data
DELETE	            Delete data
 */

// get method 
async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getUsers();
/*  🧠 Notice something important
 For a normal GET request, you don't need to specify method: "GET". */

//  post method 
async function createUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name: "Mohamed",
          age: 30,
          role: "Developer"
        })
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

createUser(); 

// put method 
/* / 🟦 PUT — Replace the whole resource

Suppose you want to change the user's information.

With PUT, you generally send the complete updated object: */
// --------------------------
/**
 * Imagine the server has this user:

{
  id: 1,
  name: "Mohamed",
  age: 30,
  role: "Developer"
}
 */ 

fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",

  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
    name: "Mohamed",
    age: 31,
    role: "Frontend Developer"
  })
});

// patch method
/**
  🟨 PATCH — Update part of the resource

Now suppose you only want to change the role.

You can send just the field that changed:
 */

fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PATCH",

  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
    role: "Frontend Developer"
  })
});
/*
| Method     | Purpose                   | Typical body                |
| ---------- | ------------------------- | --------------------------- |
| **GET**    | Get data                  | Usually none                |
| **POST**   | Create data               | New resource                |
| **PUT**    | Replace/update resource   | Usually full representation |
| **PATCH**  | Partially update resource | Only changed fields         |
| **DELETE** | Delete data               | Usually none                |

**************************---Fetch pattern---**********************************
// GET
fetch(url);

// POST
fetch(url, {
  method: "POST",
  body: JSON.stringify(data)
});

// PUT
fetch(url, {
  method: "PUT",
  body: JSON.stringify(fullData)
});

// PATCH
fetch(url, {
  method: "PATCH",
  body: JSON.stringify(changedData)
});

// DELETE
fetch(url, {
  method: "DELETE"
});
 */