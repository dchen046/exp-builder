import Accordion from 'react-bootstrap/Accordion';
import { InfoForm } from './InfoForm';
import { EducationForm } from './EducationForm';
import './styles/forms.css'

function InputTab({ tabIndex, tabHeader, form }) {
    return (
        <Accordion.Item eventKey={tabIndex}>
            <Accordion.Header>
                {tabHeader}
            </Accordion.Header>
            <Accordion.Body>
                {form}
            </Accordion.Body>
        </Accordion.Item>
    );
}

function CvForm({
    currInfo,
    updateInfo,
    educations,
    updateEducation
}) {
    let index = 0;
    return (
        <section>
            <Accordion defaultActiveKey={index} className='col-auto'>
                <InputTab
                    tabIndex={index++}
                    tabHeader={'Personal Info'}
                    form={<InfoForm currInfo={currInfo} updateInfo={updateInfo} />}
                />

                <InputTab 
                    tabIndex={index++} 
                    tabHeader={'Eudcation'} 
                    form={<EducationForm educations={educations} updateEducation={updateEducation} />} />
{/* 
                <InputTab 
                    tabIndex={++index} 
                    tabHeader={'Experience'} 
                    handleCreation={InfoForm} /> */}
            </Accordion>
        </section>
    );
}

export default CvForm