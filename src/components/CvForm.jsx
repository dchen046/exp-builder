import Accordion from 'react-bootstrap/Accordion';
import Info from "./info";

function InfoTab({tabIndex, tabHeader, createForm}) {
    return (
        <Accordion.Item eventKey={tabIndex}>
            <Accordion.Header>
                {tabHeader}
            </Accordion.Header>
            <Accordion.Body>
                {createForm}
            </Accordion.Body>
        </Accordion.Item>
    )
}

function CvForm() {
    const headers = ['General Info', 'Education', 'Experience', 'Projects']
    return (
        <section>
            <Accordion defaultActiveKey='0' className='col-auto'>
                <InfoTab tabIndex='0' tabHeader={headers[0]} createForm={<Info />} />
                {/* <InfoTab tabIndex='1' tabHeader={headers[1]} createForm={<Info />} />
                <InfoTab tabIndex='2' tabHeader={headers[2]} createForm={<Info />} />
                <InfoTab tabIndex='3' tabHeader={headers[3]} createForm={<Info />} /> */}
            </Accordion>
        </section>

    );
}

export default CvForm