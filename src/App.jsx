// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { InfoForm } from './components/InfoForm';
import CvForm from './components/CvForm';


function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
      <main>
        <div id='inputs'>
          {/* <InfoForm currInfo={currInfo} updateInfo={updateInfo} /> */}
          < CvForm />
        </div>
        <div id='resume'></div>
      </main>
    </>
  )
}

export default App