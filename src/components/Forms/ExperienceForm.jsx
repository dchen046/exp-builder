import { Button, Form } from "react-bootstrap";
import { CreateFormGroup } from "../utility/FormCreations";

function CreateForm({ experiences, updateExperience, handleRemove }) {
    return (
        experiences.map((experience, index) => {
            return (
                <li key={experience.id}>
                    <Form >
                        <CreateFormGroup label='Company' value={experience.company} updateInfo={updateExperience} index={index} />
                        <CreateFormGroup label='Position' value={experience.position} updateInfo={updateExperience} index={index} />
                        <CreateFormGroup label='Location' value={experience.location} updateInfo={updateExperience} index={index} />
                        <CreateFormGroup label='Start Date' name="start" type="month" value={experience.start} updateInfo={updateExperience} index={index} />
                        <CreateFormGroup label='End Date' name="end" type="month" value={experience.end} updateInfo={updateExperience} index={index} />
                        <CreateFormGroup label='Responsibilities' type='textarea' value={experience.responsibilities} updateInfo={updateExperience} index={index} />
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

export function ExperienceForm( {experiences, updateExperience} ) {
    const handleAddExperience = () => {
        const newExp = {
            id: Date.now(),
            company: '',
            position: '',
            location: '',
            startDate: '',
            endDate: '',
            responsibilities: '',
        }
        updateExperience([...experiences, newExp]);
    }

    const handleChangeExp = (index, e) => {
        const { name, value } = e.target;
        const update = experiences.map((exp, i) => i === index ? { ...exp, [name]: value } : exp);
        
        updateExperience(update);
    }

    const handleRemoveExp = (index) => {
        updateExperience(experiences.filter( (_, i) => i !== index))
    }

    return (
        <section>
            <ul>
                <CreateForm experiences={experiences} updateExperience={handleChangeExp} handleRemove={handleRemoveExp} />
            </ul>
            <Button
                id='add-edu'
                variant='outline-success'
                onClick={handleAddExperience}>+ Add Experience</Button>
        </section>
    )
}