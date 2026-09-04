/**
 * DOM Mnipulation 
 * HTML
  ↓
Browser parses HTML
  ↓
DOM is created
  ↓
JavaScript accesses DOM
  ↓
JavaScript changes DOM
  ↓
Browser updates what you see
 */

console.log('js file is runnig')
// get student form
const studentForm = document.querySelector(".student-form")
console.log(studentForm);

const studentName = document.querySelector("#full-name")
console.log(studentName);

const studentRollNumber = document.querySelector("#roll-number")
console.log(studentRollNumber)

const studentEmail = document.querySelector("#email")
console.log(studentEmail)

const studentCourse = document.querySelector("#course")
console.log(studentCourse);

const studentPhoneNumber = document.querySelector("#phone")
console.log(studentPhoneNumber);

const addStudentBtn = document.querySelector(".add-student-btn")
console.log(addStudentBtn);



console.log(studentCourse.options);

// 1. Print all options

// 2. Print the text of the second option

// 3. Print the value of the second option

// 4. Change the selected course to Computer Science
console.log(studentCourse.options);
console.log(studentCourse.options[1].textContent)
console.log(studentCourse.options[1].value)


// empty array to storing the students 
let students = []

// edit student roll 
let editingRoll = null;

//  get data from the form and display in ui 
studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  //  create an object after the submission of form
  const student = {
    name: studentName.value,
    rollNumber: studentRollNumber.value,
    email: studentEmail.value,
    course: studentCourse.value,
    phone: studentPhoneNumber.value,
    status: "Active"
  }
  if (editingRoll === null) {
     const doesStudentExist = students.some((stu) => {
        return stu.rollNumber === student.rollNumber;
    });

    if (doesStudentExist) {
        console.log("Roll number already exists");
        return;
    }
    students.push(student);
  } else {
    // update student 
    const updateStudent = students.find((stu) => {
      console.log(stu, "else block");

      return stu.rollNumber === editingRoll;
    })
    
    updateStudent.name = studentName.value;
    updateStudent.rollNumber = studentRollNumber.value;
    updateStudent.email = studentEmail.value;
    updateStudent.course = studentCourse.value;
    updateStudent.phone = studentPhoneNumber.value;
  }
  editingRoll = null;
  console.log(students)

  displayData(students);

  // empty the input feilds after the submission
  studentName.value = "";
  studentRollNumber.value = "";
  studentEmail.value = "";
  studentCourse.value = "";
  studentPhoneNumber.value = "";
});

// get table body from the table to display students data on the ui
const studentsList = document.getElementById('student-list')

function displayData(students) {
  console.log(students)
  // clear the old data form the table body
  studentsList.innerHTML = ""
  students.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.rollNumber}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
      <td>${student.phone}</td>
      <td>${student.status}</td>
      <td>
    <button class="edit-btn" data-roll = ${student.rollNumber}>Edit</button>
    <button class="delete-btn" data-roll = "${student.rollNumber}">Delete</button>
      </td>
    `
    studentsList.appendChild(row);
  })

}
/** ####################################   comment for now to rewrite the code and understand 
// to find edit 
let editingRoll = null;
// event listener for delete functionality 
studentsList.addEventListener("click",(event)=>{
 event.preventDefault()
 
 // for delete functionality 
 /*
 console.log(event.target.dataset.roll)
 // get roll number for deleting student
 const roll = event.target.dataset.roll;
 // find the student which roll number is matched 
 const updateStudents = 
 students.filter((student)=>{
  
     return  student.rollNumber !== roll;
     // console.log(students)
   
 })
 console.log(updateStudents,"update students")
 students = updateStudents;
 console.log(students,"new student array");
 displayData(students)

 edit #############################################

 // edit functionality
 const roll = event.target.dataset.roll;
 editingRoll = roll;
 console.log(roll);

 const studentFind = students.find((student)=>{
   return student.rollNumber === roll 
 })
 console.log(studentFind);

   // Loading the student's data into the form.
   studentName.value = studentFind.name;
   studentRollNumber.value = studentFind.rollNumber;
   studentEmail.value = studentFind.email;
   studentCourse.value = studentFind.course;
   studentPhoneNumber.value = studentFind.phone;

   // check either add student or edit 
   if(editingRoll === null){
     // add student
     students.push(student)
   }else {
     // update the student
     // find student 
    const studentFind = students.find((student)=>{
   return student.rollNumber === roll 
    })
     studentFind.name = studentName.value;
     studentFind.rollNumber = studentRollNumber.value ;
      studentFind.email = studentEmail.value;
      studentFind.course = studentCourse.value;
      studentFind.phone = studentPhoneNumber.value; 
     console.log("update student clicked",studentFind.name)
   }
   
   displayData(students)
   editingRoll = null;
   
})

################################################### */

// DELETE FUNCTIONALITY 
studentsList.addEventListener('click', (event) => {
  event.preventDefault();
  const deleteBtn = event.target.classList.contains('delete-btn')
  if (deleteBtn) {
    console.log('deleteBtn was clicked')
    // select the student throgh roll number
    const roll = event.target.dataset.roll;
    console.log(roll)
    // find the student which is matches and filter 
    const updateStudents = students.filter(student =>
      student.rollNumber !== roll // creates new array withot roll
    )
    students = updateStudents;
    displayData(students);
  }
})
// EDIT FUNCTIONALITY

studentsList.addEventListener('click', (event) => {
  event.preventDefault();
  const editBtn = event.target.classList.contains('edit-btn')
  if (editBtn) {
    console.log(' edit Btn was clicked')
    // get rollnumber
    const roll = event.target.dataset.roll;
    const studentFind = students.find(stu => stu.rollNumber === roll)
    console.log(studentFind);
    console.log(roll);

    //  after getting student put it property values into the form
    studentName.value = studentFind.name;
    studentRollNumber.value = studentFind.rollNumber;
    studentEmail.value = studentFind.email;
    studentCourse.value = studentFind.course;
    studentPhoneNumber.value = studentFind.phone;

    editingRoll = roll;
  }
})

//  ========================================================================
//  practice functionality and edge cases
/*
// SEARCH FUNCTIONALITY 
const searchStudent = document.querySelector('#search-student')
console.log(searchStudent);

searchStudent.addEventListener('input', (event) => {
  event.preventDefault();
  const searchVal = event.target.value;
  const findStudents = students.filter((student) => student.name.toLowerCase().includes(searchVal.toLowerCase()))
  console.log(findStudents);

    // SEARCH FUNCTIONALITY 
const searchStudent = document.querySelector('#search-student')
console.log(searchStudent);

searchStudent.addEventListener('input', (event) => {
  event.preventDefault();
  const searchVal = event.target.value;
  const findStudents = students.filter((student) => student.name.toLowerCase().includes(searchVal.toLowerCase()))
  console.log(findStudents);
    if (findStudents.length === 0) {
      const studentsList = document.querySelector('#sudentd-list')
      const tableRow = document.createElement('tr');
      const tableData = document.createElement('td');

      tableData.innerHTML = `<p>Student not Match</p>`;
      tableRow.appendChild(tableData);
      studentsList.appendChild(tableRow);
} 
  displayData(findStudents)
})
  // display the filterd data
  displayData(findStudents)
    if (findStudents.length === 0) {
      const studentsList = document.querySelector('#sudentd-list')
      const tableRow = document.createElement('tr');
      const tableData = document.createElement('td');

      tableData.innerHTML = `<p>Student not Match</p>`;
      tableRow.appendChild(tableData);
      studentsList.appendChild(tableRow);
} 
  // displayData(findStudents)
})
*/

// SEARCH FUNCTIONALITY

const searchStudent = document.querySelector('#search-student');

searchStudent.addEventListener('input', (event) => {

  const searchVal = event.target.value;

  const findStudents = students.filter((student) =>
    student.name
      .toLowerCase()
      .includes(searchVal.toLowerCase())
  );

  // Display filtered students
  displayData(findStudents);

  // If no student is found
  if (findStudents.length === 0) {

    const tableRow = document.createElement('tr');
    const tableData = document.createElement('td');

    tableData.colSpan = 7;
    tableData.innerHTML = `<p>Student not found</p>`;

    tableRow.appendChild(tableData);
    studentsList.appendChild(tableRow);
  }
});

// ###########  practice methods ###########
// some method 
// --------------------------------------------------------------------------------
/*
Now let's practice 🔥

Don't look for the answer online. Write the code yourself.

Challenge 1 — some()
const numbers = [12, 25, 7, 40, 18];

Check whether at least one number is greater than 30. */

const numbers = [12, 25, 7, 40, 18];
let result = numbers.some((number)=>{
  return number > 30
})
console.log(result) // true 

/**
 * Now do Challenge 2 yourself:

const students = [
    { name: "Ali", marks: 75 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 82 }
];

Use some() to check:

Is there at least one student whose marks are below 50?
 */

const studentsP = [
    { name: "Ali", marks: 75 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 82 }
];

const stuResult = studentsP.some((stu)=>{
  return stu.marks < 50
})
console.log(stuResult)

/**
 * Now Challenge 3 — every() 🚀

Use this array:

const numbers = [10, 20, 30, 40];

Use every() to check:

Are all numbers greater than 5?
 */

const numbersEvery= [10, 20, 30, 40];

const everyResult = numbersEvery.every((num)=>{
  return num > 5;
})
console.log(everyResult);

/**
 * const students = [
    { name: "Ali", marks: 75 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 82 }
];

Use every() to check:

Does every student have marks above 40?
 */

const stuPevery = studentsP.every((stu)=>{
  return stu.marks > 40
})
console.log(stuPevery);

const studentsPr = [
  { name: "Ali", rollNumber: 101, isActive: true ,phone : 898389383939 },
  { name: "Sara", rollNumber: 102, isActive: true ,phone : 898389383939 },
  { name: "John", rollNumber: 103, isActive: false  ,phone : 898389383939}
];

// 👉 Task: Check whether at least one student is inactive.

// check if any student is in active
const isAnyInActive = studentsPr.some((stu) => stu.isActive === false) 

// check is every student is active
const isEveryActive = studentsPr.every ((stu)=> stu.isActive)

function checkActiveOrInactive (){
    const isActive = studentsPr.every((stu)=> stu.isActive)
    if(!isActive){
      console.log('some students are in active ')
    }else {
      console.log('all students are active ')
    }
}

function checkActiveOrInactive (){
    const isSomeInActive = studentsPr.some((stu)=> !stu.isActive)
    if(isSomeInActive){
      console.log('some students are in active ')
    }else {
      console.log('all students are active ')
    }
}

const isEveryHavePhone = studentsPr.every((stu)=> stu.phone)
const isAnyemptyphone = studentsPr.some((stu)=>stu.phone === "")
const everystudenthascourse = students.every((stu) => stu.course);
const somestudenthasNocourse = students.some((stu) => stu.course === "");


students.some((stu)=> stu.rollNumber === "101")

// Check whether all students have a unique roll number.

// Hint: Think about how you could use some() to detect a duplicate.
const uniqueRollnumber = students.some((stu)=> {
    // stu.rollNumber === 101 ;
    students.filter((number)=> { (stu.rollNumber === number.rollNumber).length > 1 ; console.log('duplicate exist')} )
} )

/**
 * 
 * Practice 1 — Duplicate names 🔥

Given:

const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 22 },
  { name: "Ali", age: 25 }
];

👉 Check whether any duplicate name exists.

Use:

some()
filter()
.length > 1
 */

const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 22 },
  { name: "Ali", age: 25 }
];
 
const duplicateNameExist = users.some((user) => {
    return users.filter((person) => person.name === user.name).length > 1;
    
})

/**
 * Practice 2 🔥

Now try this yourself:

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 60000 }
];

👉 Check whether any duplicate product name exists using some() and filter().

Write the complete code. 💪
 */
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 60000 }
];
const anyDuplicateProduct =  products.some((pro)=> {
  return products.filter((product)=> pro.name === product.name) .length > 1 ;
})

/**
 * const studentsCourse= [
  { name: "Ali", course: "JavaScript" },
  { name: "Sara", course: "React" },
  { name: "John", course: "JavaScript" }
];
👉 Check whether any course is assigned to more than one student.

Use:

some()
filter()
.length > 1
 */
 const studentsCourse= [
  { name: "Ali", course: "JavaScript" },
  { name: "Sara", course: "React" },
  { name: "John", course: "JavaScript" }
];
const checkAssaignCourseMorethanOne = studentsCourse.some((stu)=> {
 return studentsCourse.filter((stuF)=> stuF.course === stu.course).length > 1 }
)

/**
 * One more challenge — slightly harder

Given:

const students = [
  { name: "Ali", course: "JavaScript", isActive: true },
  { name: "Sara", course: "React", isActive: true },
  { name: "John", course: "JavaScript", isActive: false },
  { name: "Mike", course: "Python", isActive: true }
];

Task: Find out whether any course has more than one student AND at least one of those students is inactive.

This will combine some(), filter(), and another condition.
 */

const studentsArr = [
  { name: "Ali", course: "JavaScript", isActive: true },
  { name: "Sara", course: "React", isActive: true },
  { name: "John", course: "JavaScript", isActive: false },
  { name: "Mike", course: "Python", isActive: true }
];

// ########### REGULAR EXPRESSION FOR FORM VALIDATION ######### 


// RegEx (Regular Expression) is a pattern used to check whether text follows a particular format.

const text = /hello/;
console.log(text.test('hello'))

// RegEx Step 2: ^ — Start of a string
const text2 = /^hello/
console.log(text2.test('am hello'))

// RegEx Step 2.1: $ — end of a string
const text3 = /hello$/
console.log(text3.test('am hello')) // true 

// 🔥 Next concept: character sets [].
// RegEx Step 3: Character Sets [] => allow us to specify multiple possible characters.

const pattern = /[abc]/;

console.log(pattern.test("apple"));  // true
console.log(pattern.test("banana")); // true
console.log(pattern.test("cat"));    // true
console.log(pattern.test("dog"));    // false

// Next concept: ranges -

/** 
 * NOTES TILL NOW 
 --------------------------------------------------
  /hello/    → looks for "hello"
  /^hello/   → "hello" must be at the start
  /world$/   → "world" must be at the end
  /[abc]/    → a OR b OR c
  /[a-c]/    → a through c
  /[0-9]/    → any digit from 0 through 9
 */

  // Next small concept: +
  