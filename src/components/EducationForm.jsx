// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { CreateFormGroup } from './utility/FormCreations';
import { Button } from 'react-bootstrap';


function CreateForm({ educations, updateEducation, handleRemove }) {
    return (
        educations.map((education, index) => {
            return (
                <li key={education.id}>
                    <Form >
                        <CreateFormGroup label='School' value={education.school} updateInfo={updateEducation} index={index} />
                        <CreateFormGroup label='Degree' value={education.degree} updateInfo={updateEducation} index={index} />
                        <CreateFormGroup label='Graduation Date (Month / Year)' name='gradDate' value={education.gradDate} updateInfo={updateEducation} type='month' index={index} />
                        <CreateFormGroup label='Location' value={education.location} updateInfo={updateEducation} index={index} />
                        <CreateDeleteBtn handleRemove={handleRemove} index={index} />
                    </Form>
                </li>
            );
        })
    );
}

function CreateDeleteBtn({ handleRemove, index}) {
    return (
        <div className='mb-3 d-flex justify-content-end'>
            <Button
                className='m-2'
                variant='outline-danger'
                onClick={() => handleRemove(index)}
            >Delete</Button>
        </div>
    )
}

export function EducationForm({ educations, updateEducation }) {
    const handleAddEducation = () => {
        const newEducation = {
            id: Date.now(),
            school: '',
            degree: '',
            location: '',
            gradDate: '',
        }
        updateEducation([...educations, newEducation])
    }

    const handleChange = (index, e) => {
        const { name, val } = e.target;
        updateEducation(educations.map((edu, i) => i === index ? { ...edu, [name]: val } : edu));
    };

    const handleRemove = (index) => {
        updateEducation(educations.filter((_, i) => i !== index));
    }

    return (
        <section>
            <ul>
                <CreateForm educations={educations} updateEducation={handleChange} handleRemove={handleRemove} />
            </ul>
            <Button
                id='add-edu'
                variant='outline-success'
                onClick={handleAddEducation}>+ Add Education</Button>
        </section>
    )
}