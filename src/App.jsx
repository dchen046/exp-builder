import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react'
import { sample } from './sample';
import CvForm from './components/Forms/CvForm';
import { Col, Row } from 'react-bootstrap';
import Resume from './components/resume';


function App() {
  const [currInfo, updateInfo] = useState({
    name: sample.name,
    email: sample.email,
    linkedin: sample.linkedin,
    github: sample.github,
  });

  const [educations, updateEducation] = useState(sample.educations);
  const [experiences, updateExperience] = useState(sample.experiences);

  return (
    <>
      <main className='justify-content-center' data-bs-theme='dark'>
        <Row className='justify-content-center'>
          <Col lg='4' id='inputs'>
            < CvForm
              currInfo={currInfo}
              updateInfo={updateInfo}
              educations={educations}
              updateEducation={updateEducation}
              experiences={experiences}
              updateExperience={updateExperience} />
          </Col>
          <Col id='resume'>
            <Resume info={currInfo} educations={educations}/>
          </Col>
        </Row>
      </main>
    </>
  )
}

export default App