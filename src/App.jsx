// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CvForm from './components/Forms/CvForm';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='d-flex'>
        <section id='inputs' className='container col-4'>
          <CvForm />
        </section>

        <section id='resume' className='container col-6'></section>
      </div>
    </>
  )
}

export default App