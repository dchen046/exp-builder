import Accordion from 'react-bootstrap/Accordion';
import {InfoForm} from './InfoForm';
import { useState } from 'react'

function InputTab({ tabIndex, tabHeader, handleCreation }) {
    console.log(tabIndex);
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

function CreateInfoForm() {
    const [currInfo, setInfo] = useState({
        name: '',
        email: '',
        linkedin: '',
        github: '',
    });

    function updateInfo(e) {
        setInfo(prevInfo => ({
            ...prevInfo,
            [e.target.name]: e.target.value,
        }));
    }

    return <InfoForm currInfo={currInfo} updateInfo={updateInfo} />
}

function CvForm() {
    return (
        <section>
            <Accordion defaultActiveKey='0' className='col-auto'>
                <InputTab tabIndex='0' tabHeader={'Personal Info'} handleCreation={CreateInfoForm} />
                <InputTab tabIndex='1' tabHeader={'Eudcation'} handleCreation={CreateInfoForm} />
                {/* <InputTab tabIndex={++index} tabHeader={'Experience'} handleCreation={InfoForm} /> */}
            </Accordion>
        </section>
    );
}

export default CvForm