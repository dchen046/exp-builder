import Accordion from 'react-bootstrap/Accordion';
import Info from "./info";

function InfoTab({tabIndex, tabHeader, createForm}) {
    return (
        <Accordion.Item eventKey={tabIndex}>
            <Accordion.Header>
                {tabHeader}
            </Accordion.Header>
            <Accordion.Body>
                {createForm()}
            </Accordion.Body>
        </Accordion.Item>
    );
}

function CreateAllTabs({cvTabs}) {
    return (
        cvTabs.map( (tab, index) => {
            return <InfoTab key={index} tabIndex={`${index}`} tabHeader={tab.header} createForm={tab.func} />
        })
    );
}

class CvTab {
    constructor(header, func) {
        this.header = header;
        this.func = func;
    }
}

function CvForm() {
    const cvTabs = [
        new CvTab('General Info', Info),
        new CvTab('Education', Info),
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