import { FC, Dispatch, SetStateAction } from 'react';
import './Steps.scss';
import Step1 from '../Step1/Step1';

interface StepsProps {
    currentStep: number;
    name: inputType;
    setName: Dispatch<SetStateAction<inputType>>;
    email: inputType;
    setEmail: Dispatch<SetStateAction<inputType>>;
    tel: inputType;
    setTel: Dispatch<SetStateAction<inputType>>;
}

const Steps: FC<StepsProps> = (props) => {
    const stepList = [<Step1 name={props.name}
        setName={props.setName}
        email={props.email}
        setEmail={props.setEmail}
        tel={props.tel}
        setTel={props.setTel} />];

    return <div className="steps">{stepList[props.currentStep - 1]}</div>;
};

export default Steps;
