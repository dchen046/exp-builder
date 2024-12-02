import Accordion from 'react-bootstrap/Accordion';
import InfoForm from './InfoForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import { CvTab } from '../../utility/CustomClasses';

function InfoTab({tabIndex, tabHeader, handleCreation}) {
    return (
        <Accordion.Item eventKey={tabIndex}>
            <Accordion.Header>
                {tabHeader}
            </Accordion.Header>
            <Accordion.Body>
                {handleCreation()}
            </Accordion.Body>
        </Accordion.Item>
    );
}

function CreateAllTabs({cvTabs}) {
    return (
        cvTabs.map( (tab, index) => {
            return <InfoTab key={index} tabIndex={`${index}`} tabHeader={tab.header} handleCreation={tab.func} />
        })
    );
}

function CvForm() {
    const cvTabs = [
        new CvTab('General Info', InfoForm),
        new CvTab('Education', EducationForm),
        new CvTab('Experience', ExperienceForm),
        new CvTab('Projects', InfoForm)
    ]

    return (
        <section>
            <Accordion defaultActiveKey='0' className='col-auto'>
                <CreateAllTabs cvTabs={cvTabs} />
            </Accordion>
        </section>

    );
}

export default CvForm