// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { CreateFormGroup } from './utility/FormCreations';

function CreateForm({ educations, updateEducation }) {
    return (

        educations.map((education, index) => {
            return (
                <Form key={index}>
                    <CreateFormGroup label='School' value={education.school} updateInfo={updateEducation} />
                    <CreateFormGroup label='Degree' value={education.degree} updateInfo={updateEducation} />
                    <CreateFormGroup label='Graduation Date (Month / Year)' value={education.gradDate} updateInfo={updateEducation} type='month' />
                    <CreateFormGroup label='Location' value={education.location} updateInfo={updateEducation} />
                </Form>
            );
        })
    );
}

export function EducationForm({ educations, updateEducation }) {
    return (
        <section>
            <CreateForm educations={educations} updateEducation={updateEducation} />
        </section>
    )
}