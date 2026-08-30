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

// FOR CHECK A STUDENT USING ROLL NUMBER
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
    if (editingRoll === null) {
        // check duplicate roll number is roll number already exist 
        const doesStudentExist = students.some((stu) => {
            return stu.rollNumber === student.rollNumber;
        })
        if (doesStudentExist) {
            // console.log('Student Roll Number Already Exist');
            // get students list 
            studentsList.innerHTML = ""
            const tableRow = document.createElement('tr')
            const tableData = document.createElement('td')

            tableData.colSpan = 10;
            tableData.innerHTML = `<h1>STUDENT ROLL NUMBER ALREADY EXIST </h1>`
            tableRow.appendChild(tableData);
            studentsList.appendChild(tableRow);

            return;
        }
        students.push(student);
    } else {
        // update the sutdent 
        const findStudent = students.find(student => student.rollNumber === editingRoll)
        if(students.some((stu)=>stu.rollNumber === student.rollNumber && stu.rollNumber !== editingRoll)){
            console.log('this roll number is already exist ')
        }else {
        findStudent.name = studentName.value
        findStudent.rollNumber = studentRollNumber.value
        findStudent.email = studentEmail.value
        findStudent.course = studentCourse.value
        findStudent.phone = studentPhoneNumber.value
        }
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
studentsList.addEventListener('click', (event) => {
    event.preventDefault();
    // BUILD EDIT AND DELETE FUNCTIONALITY
    // target delete and edit bottons and roll number for a particular student
    const deleteBtn = event.target.classList.contains("delete-btn");
    const editBtn = event.target.classList.contains("edit-btn");
   const activeBtn =  event.target.classList.contains("active-btn")
    const roll = event.target.dataset.roll;

    // delete functionality
    if (deleteBtn) {
        // remove the particular student and create new array list 
        const updateStudents = students.filter(student => student.rollNumber !== roll)
        students = updateStudents; // REASSAINING STUDENTS 
        displayData(students);  //  RE-RENDER STUDENTS LIST 
       
    }
    if (editBtn) {
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

//####################### FUNCTIONALITIES AND EDGE CASES ##########################

// SEARCH FUCNTIONALITY 
// get the search input 
const searchStudent = document.querySelector('#search-student')

// eventListener for the seach 
searchStudent.addEventListener('input', (e) => {
    // get value from the search input 
    const searchVal = e.target.value;
    // filter all the matching students 
    const matchStudents = students.filter(student => {
        return student.name
            .toLowerCase()
            .includes(searchVal.toLowerCase())
    })

    displayData(matchStudents);

    // if student does not match ( search with zero results. )
    if (matchStudents.length === 0) {
        // get students list 
        const tableRow = document.createElement('tr')
        const tableData = document.createElement('td')

        tableData.colSpan = 10;
        tableData.innerHTML = `<h1>STUDENT NOT FOUND </h1>`
        tableRow.appendChild(tableData);
        studentsList.appendChild(tableRow);
    }
})

