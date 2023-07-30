import { Dispatch, FC, SetStateAction } from 'react';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import './Steps.scss';
import Step3 from '../Step3/Step3';

interface StepsProps {
    currentStep: number;
    name: inputType;
    setName: Dispatch<SetStateAction<inputType>>;
    email: inputType;
    setEmail: Dispatch<SetStateAction<inputType>>;
    tel: inputType;
    setTel: Dispatch<SetStateAction<inputType>>;
    plan: planType;
    setPlan: Dispatch<SetStateAction<planType>>;
    addOns: addOnType[];
    setAddOns: Dispatch<SetStateAction<addOnType[]>>;
}

const Steps: FC<StepsProps> = (props) => {
    const stepList = [
        <Step1
            name={props.name}
            setName={props.setName}
            email={props.email}
            setEmail={props.setEmail}
            tel={props.tel}
            setTel={props.setTel}
        />,
        <Step2 plan={props.plan} setPlan={props.setPlan} />,
        <Step3 addOns={props.addOns} setAddOns={props.setAddOns} />
    ];

    return <div className="steps">{stepList[props.currentStep - 1]}</div>;
};

export default Steps;
