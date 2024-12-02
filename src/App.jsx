import { useState } from 'react'
import { sample } from './sample';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { InfoForm } from './components/InfoForm';
import CvForm from './components/CvForm';


function App() {
  // const [count, setCount] = useState(0)
  const [currInfo, setInfo] = useState({
    name: sample.name,
    email: sample.email,
    linkedin: sample.linkedin,
    github: sample.github,
  });

  const [educations, updateEducation] = useState(sample.education);

  function updateInfo(e) {
    setInfo(prevInfo => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <main>
        <div id='inputs'>
          {/* <InfoForm currInfo={currInfo} updateInfo={updateInfo} /> */}
          < CvForm 
            currInfo={currInfo} 
            updateInfo={updateInfo} 
            educations={educations}
            updateEducation={updateEducation}/>
        </div>
        <div id='resume'></div>
      </main>
    </>
  )
}

export default App