// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CvForm from './components/CvForm.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='d-flex'>
        <div className='container col-4'>
          <CvForm />
        </div>

        <div className='container col-6'>
          
        </div>
      </div>
    </>
  )
}

export default App