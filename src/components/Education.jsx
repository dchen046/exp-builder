import { Row, Col } from "react-bootstrap";
function Education({ educations }) {
    return (
        <section id="cvEdu">
            <h4>EDUCATION</h4>
            <hr />
            <WriteEdu educations={educations} />
        </section>
    )
}

function WriteEdu({ educations }) {
    return (
        educations.map((education) => {
            return (
                <>
                    <Row className='justify-content-evenly'>
                        <Col>
                            <b>{education.school}</b>
                        </Col>
                        <Col className="text-end">
                            <b>{education.location}</b>
                        </Col>
                    </Row>
                    <Row>
                        <i>{education.degree} ({education.gpa} / 4.0)</i>
                    </Row>
                </>
            )
        })
    )
}

export default Education;