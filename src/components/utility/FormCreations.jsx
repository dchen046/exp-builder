import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export function CreateFormGroup ({label, value, updateInfo, type = 'text'}) {
    return (
        <Form.Group>
            <FloatingLabel label={label}>
                <Form.Control type={type} name={label} value={value} onChange={updateInfo}></Form.Control>
            </FloatingLabel>
        </Form.Group>
    )
}