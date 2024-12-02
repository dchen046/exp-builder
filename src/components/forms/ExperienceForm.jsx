import { InputInfo } from '../../utility/CustomClasses';
import { CreateForm } from '../../utility/FormCreation';

function ExperienceForm() {
    const inputsInfo = [
        new InputInfo('Company'),
        new InputInfo('Title'),
        new InputInfo('Duration', 'date'),
        new InputInfo('Summary', 'textarea')
    ];
    return <CreateForm inputsInfo={inputsInfo} />
}

export default ExperienceForm;