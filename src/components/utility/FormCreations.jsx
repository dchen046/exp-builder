import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export function CreateFormGroup ({label, value, updateInfo, name = '', type = 'text', index = -1}) {
    if (name === '') name = label.toLowerCase();
    if (index < 0) {
        return (
            <Form.Group>
                <FloatingLabel label={label}>
                    <Form.Control 
                        type={type} 
                        name={name} 
                        value={value} 
                        onChange={updateInfo}></Form.Control>
                </FloatingLabel>
            </Form.Group>
        );
    }

    const handleUpdate = (e) => {
        updateInfo(index, e);
    }

    if (type === 'textarea') {
        return (
            <Form.Group>
            <FloatingLabel label={label}>
                <Form.Control 
                    as={type} 
                    style={{ height: '100px' }}
                    name={name} 
                    value={value || ''}
                    onChange={handleUpdate}></Form.Control>
            </FloatingLabel>
        </Form.Group>
        )
    }

    return (
        <Form.Group>
            <FloatingLabel label={label}>
                <Form.Control 
                    type={type} 
                    name={name} 
                    value={value || ''}
                    onChange={handleUpdate}></Form.Control>
            </FloatingLabel>
        </Form.Group>
    );
}