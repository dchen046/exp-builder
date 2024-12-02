import { InputInfo } from '../../utility/CustomClasses';
import { CreateForm } from '../../utility/FormCreation';

function Education() {
    const inputsInfo = [
        new InputInfo('School Name'),
        new InputInfo('Date', 'date'),
        new InputInfo('Degree'),
        new InputInfo('GPA out of 4.0', 'number')
    ];
    return <CreateForm inputsInfo={inputsInfo} />
}

export default Education;