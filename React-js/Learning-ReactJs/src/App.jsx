import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Doctor from './Doctor.jsx'
import Patient from "./Patient.jsx"
import Count from "./Components/Count.jsx"
import ShowHide from './Components/ShowHide.jsx'
import LikeBtn from './Components/LikeBtn.jsx'

function App() {
  function handleClick (){
    console.log('button was clicked ')
  }
return (
    <>
      {/* <button onClick={handleClick}>click me </button>
      <Doctor name="nauman" speciality="homeopathy" experience={15}/>
      <Doctor name="nauman" speciality="homeopathy" experience={15}/>
      <Doctor name="nauman" speciality="homeopathy" experience={15}/>
      <Patient name="sakhlane" age= {30} course = "React-js" />
       <Patient name="Rahul" age={25} course="JavaScript" />
      <Patient name="Aisha" age={28} course="HTML/CSS" /> */}

      {/* ---------- day 2 of react js props and useState hook------ */}
        {/* <Count /> */}
        {/* <ShowHide /> */}
        <LikeBtn />
    </>
  )
}

export default App
