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
    students.push(student);
  } else {
    const updateStudent = students.find((stu) => {
      console.log(stu, "else block");

      return stu.rollNumber === editingRoll;
    })
    const doesStudentExist = students.some((updateStudent)=>{
      if(updateStudent ){
        console.log()
      }
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