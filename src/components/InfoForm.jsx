import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function CreateFormGroup ({label, value, updateInfo}) {
    return (
        <Form.Group>
            <FloatingLabel label={label}>
                <Form.Control type='text' name={label} value={value} onChange={updateInfo}></Form.Control>
            </FloatingLabel>
        </Form.Group>
    )
}

function CreateForm({ currInfo, updateInfo }) {
    return (
        <Form >
            <CreateFormGroup label='name' value={currInfo.name} updateInfo={updateInfo} />
            <CreateFormGroup label='email' value={currInfo.email} updateInfo={updateInfo} />
            <CreateFormGroup label='github' value={currInfo.github} updateInfo={updateInfo} />
            <CreateFormGroup label='linkedin' value={currInfo.linkedin} updateInfo={updateInfo} />
        </Form>
    )
}

export function InfoForm({ currInfo, updateInfo }) {
    return (
        <section>
            <CreateForm currInfo={currInfo} updateInfo={updateInfo} />;
        </section>
    )
}