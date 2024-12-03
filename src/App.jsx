import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { sample } from './sample';
import CvForm from './components/CvForm';
import { Col, Row } from 'react-bootstrap';


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
      <main className='container justify-content-center'>
        <Row className='justify-content-center'>
          <Col lg='4'>
            < CvForm
              currInfo={currInfo}
              updateInfo={updateInfo}
              educations={educations}
              updateEducation={updateEducation}
              experiences={experiences}
              updateExperience={updateExperience} />
          </Col>
          <Col id='resume'>
            resume
          </Col>
        </Row>
      </main>
    </>
  )
}

export default App