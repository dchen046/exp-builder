import { CreateFormGroup } from '../utility/FormCreations';
import { Form, Button } from 'react-bootstrap';


function CreateForm({ educations, updateEducation, handleRemove }) {
    return (
        educations.map((education, index) => {
            return (
                <li key={education.id}>
                    <Form >
                        <CreateFormGroup label='School' value={education.school} updateInfo={updateEducation} index={index} />
                        <CreateFormGroup label='Degree' value={education.degree} updateInfo={updateEducation} index={index} />
                        <CreateFormGroup label='Graduation Date (Month / Year)' name='graduation' value={education.graduation} updateInfo={updateEducation} type='month' index={index} />
                        <CreateFormGroup label='GPA (Out of 4.0)' type='number' name='gpa' value={education.gpa} updateInfo={updateEducation} index={index} />
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
        <div className='del-btn mb-3'>
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

    const handleChangeEdu = (index, e) => {
        const { name, value } = e.target;
        const update = educations.map((edu, i) => i === index ? { ...edu, [name]: value } : edu);
        updateEducation(update);
    };

    const handleRemoveEdu = (index) => {
        updateEducation(educations.filter((_, i) => i !== index));
    }

    return (
        <section>
            <ul>
                <CreateForm educations={educations} updateEducation={handleChangeEdu} handleRemove={handleRemoveEdu} />
            </ul>
            <Button
                id='add-btn'
                variant='outline-success'
                onClick={handleAddEducation}>+ Add Education</Button>
        </section>
    )
}