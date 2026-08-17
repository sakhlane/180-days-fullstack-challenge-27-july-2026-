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
console.log(studentCourse.options.value = "another course")

// empty array to storing the students 
 const students = [{name: 'sakhlane', rollNumber: '8989', email: 'sakhlane@gmail.com', course: '', phone: 'kdjfkjdkfj',}

];

//  get data from the form and display in ui 
studentForm.addEventListener("submit", (event) => {
   event.preventDefault();
    
  //  create an object after the submission of form
  const student ={
    name : studentName.value,
    rollNumber : studentRollNumber.value,
    email : studentEmail.value,
    course : studentCourse.value,
    phone : studentPhoneNumber.value,
    status : "Active"
  }
  students.push(student);
  console.log(students) 

displayData(students);

// empty the input feilds after the submission
studentName.value = "";
studentRollNumber.value="";
studentEmail.value = "";
studentCourse.value = "";
studentPhoneNumber.value = "";


});

  // display data on the ui
  const studentsList = document.getElementById('student-list')
  function displayData(students){
  console.log(students)
    // creating row using dom
      // studentsList.innerHTML = ""
    students.forEach((student)=>{
      const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.rollNumber}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
      <td>${student.phone}</td>
      <td>${student.status}</td>
      <td>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn" data-roll = "${student.rollNumber}">Delete</button>
      </td>
    `
        studentsList.appendChild(row);
    })
    
}

// event listener for delete functionality 
studentsList.addEventListener("click",(event)=>{
  event.preventDefault()
  console.log(event.target.dataset.roll)
  
})

