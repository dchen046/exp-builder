import { Row, Col } from "react-bootstrap";
import { months } from "./utility/Months";

function Experience({ experiences }) {
    return (
        <section id='cvExp'>
            <h4>EXPERIENCES</h4>
            <hr />
            <WriteExp experiences={experiences} />
        </section>

    )
}

function WriteExp({ experiences }) {
    return (
        experiences.map((experience) => {
            return (
                <section key={experience.id}>
                    <WriteCompany company={experience.company} location={experience.location} />
                    <WritePosition position={experience.position} start={experience.start} end={experience.end} />
                    <WriteResponsiblities resp={experience.responsibilities} />
                </section>
            )
        })
    )
}

function WriteCompany({ company, location }) {
    return (
        <Row>
            <Col>
                <b>{company}</b>
            </Col>
            <Col className='text-end'>
                <b>{location}</b>
            </Col>
        </Row>
    )
}

function WritePosition({ position, start, end }) {
    return (
        <Row>
            <Col>
                <i>{position}</i>
            </Col>
            <Col className='text-end'>
                {start && end ? <WriteDate start={start} end={end} /> : ''}
            </Col>
        </Row>
    )
}

function WriteResponsiblities({ resp }) {
    let points = resp.split('\n');
    const writePoint = () => {
        return (
            points.map((point, index) => {
                return (
                    <li key={index}>
                        {point}
                    </li>
                )
            })
        )
    }

    return (
        <Row>
            <Col>
                <ul>
                    {writePoint()}
                </ul>
            </Col>
        </Row>
    )
}

function WriteDate({ start, end }) {
    const [sYear, sMonth] = start.split('-');
    const [eYear, eMonth] = end.split('-');

    const startDate = `${months[sMonth]} ${sYear}`;
    const endDate = `${months[eMonth]} ${eYear}`;

    return (
        <i>
            {startDate} - {endDate}
        </i>
    )
}

export default Experience;