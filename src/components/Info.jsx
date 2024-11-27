// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function FormTypes({ inputs }) {
    return (
        inputs.map((input, index) => {
            return (
                <Form.Group key={index} className='mb-3'>
                    <FloatingLabel label={input.label}>
                        <Form.Control type={input.type} />
                    </FloatingLabel>
                </Form.Group>
            )
        })
    )
}

class InputInfo {
    constructor(label, type = 'text') {
        this.label = label;
        this.type = type;
    }
}

function Info() {
    const inputsInfo = [
        new InputInfo('Full Name'),
        new InputInfo('Email', 'email'),
        new InputInfo("GitHub Link"),
        new InputInfo("LinkedIn Link")
    ]

    return (
        <Form >
            <FormTypes inputs={inputsInfo} />
            {/* <Button variant="success" type="submit">Save</Button> */}
        </Form>
    )
}

export default Info;