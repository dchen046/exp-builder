import Accordion from 'react-bootstrap/Accordion';
import Info from './Info';
import Education from './Education';
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
        new CvTab('General Info', Info),
        new CvTab('Education', Education),
        new CvTab('Experience', Info),
        new CvTab('Projects', Info)
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