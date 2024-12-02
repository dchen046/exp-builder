import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

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

export function CreateForm({inputsInfo}) {
    return (
        <Form >
            <FormTypes inputs={inputsInfo} />
        </Form>
    )
}


