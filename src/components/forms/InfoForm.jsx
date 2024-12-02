// import Button from 'react-bootstrap/Button';
import { InputInfo } from '../../utility/CustomClasses';
import { CreateForm } from '../../utility/FormCreation';


function InfoForm() {
    const inputsInfo = [
        new InputInfo('Full Name'),
        new InputInfo('Email', 'email'),
        new InputInfo('GitHub Link'),
        new InputInfo('LinkedIn Link')
    ]
    return <CreateForm inputsInfo={inputsInfo} />;
}

export default InfoForm;