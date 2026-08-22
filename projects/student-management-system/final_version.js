console.log('this is the final version of javascript for student management system project')

// GET FORM AND FORM INPUTS 
const studentForm = document.querySelector(".student-form");
const studentName = document.querySelector("#full-name")
const studentRollNumber = document.querySelector("#roll-number")
const studentEmail = document.querySelector("#email")
const studentCourse = document.querySelector("#course")
const studentPhoneNumber = document.querySelector("#phone")
const addStudentBtn = document.querySelector(".add-student-btn")

// FOR STORING STUDENTS 
let students = [];

// FOR GET A STUDENT USING ROLL NUMBER
let editingRoll = null;

// GET FORM INPUT VALUES FROM THE FORM USING SUBMIT EVENT
studentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // CREATE A SUDENT OBJECT TO STORE STUDENT DETAILS 
    const student = {
        name: studentName.value,
        rollNumber: studentRollNumber.value,
        email: studentEmail.value,
        course: studentCourse.value,
        phone: studentPhoneNumber.value,
        status: "Active"
    }
    if(editingRoll === null){
        students.push(student);
    }else {
        const findStudent = students.find(student => student.rollNumber === editingRoll)
       findStudent.name = studentName.value 
       findStudent.rollNumber = studentRollNumber.value 
       findStudent.email =  studentEmail.value 
       findStudent.course = studentCourse.value 
       findStudent.phone =  studentPhoneNumber.value 
    }
        editingRoll = null // after update student editing roll should be null 

    // AFTER THE SUBMISSION OF STUDENTS DETAIL CLEAR THE INPUT FEILDS OF FORM
    studentName.value = "";
    studentRollNumber.value = "";
    studentEmail.value = "";
    studentCourse.value = "";
    studentPhoneNumber.value = "";

    // CALL THE DISPLAYDATA () TO DISPLAY THE DATA ON UI
    displayData(students)

})

// DISPLAY DATA ON UI

// get table body from the table to display students data on the ui
const studentsList = document.getElementById('student-list')

function displayData(students) {
    // clear the table body on ui 
    studentsList.innerHTML = ""
    // create individual row for a student
    students.forEach(student => {
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
        // display the row in the table body on ui
        studentsList.appendChild(row)
    });
}

// DELETE AND EDIT FUNCTIONALITY using EVENT DELEGATION 
studentsList.addEventListener('click',(event)=>{
    event.preventDefault();
    // BUILD EDIT AND DELETE FUNCTIONALITY
    // target delete and edit bottons and roll number for a particular student
    const deleteBtn = event.target.classList.contains("delete-btn");
    const editBtn = event.target.classList.contains("edit-btn");
    const roll = event.target.dataset.roll;
    
    // delete functionality
    if(deleteBtn){
    // remove the particular student and create new array list 
    const updateStudents = students.filter( student => student.rollNumber !== roll )
    students = updateStudents; // REASSAINING STUDENTS 
    displayData(students);  //  RE-RENDER STUDENTS LIST 
    }
    if(editBtn){
    //  find the particular student whos values is going to be edit
    const findStudent = students.find(student => student.rollNumber === roll)
    //  assaing the student data values to into a form 
    studentName.value = findStudent.name;
    studentRollNumber.value = findStudent.rollNumber;
    studentEmail.value = findStudent.email;
    studentCourse.value = findStudent.course;
    studentPhoneNumber.value = findStudent.phone;
    
    editingRoll = roll; // RE ASSAINING ROLL NUMBER to edit the student  
}
})

