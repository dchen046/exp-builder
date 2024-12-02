import Form from 'react-bootstrap/Form';
import { CreateFormGroup } from './utility/FormCreations';

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
            <CreateForm currInfo={currInfo} updateInfo={updateInfo} />
        </section>
    )
}