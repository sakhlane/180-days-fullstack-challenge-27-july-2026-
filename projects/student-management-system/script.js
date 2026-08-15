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

studentForm.addEventListener("submit", (event) => {
   event.preventDefault();
   
    console.log(studentName.value);
    console.log(studentRollNumber.value);
    console.log(studentEmail.value);
    console.log(studentCourse.value);
    console.log(studentPhoneNumber.value);
});