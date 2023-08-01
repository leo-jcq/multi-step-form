import { Dispatch, FC, SetStateAction } from 'react';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import Step4 from '../Step4/Step4';
import Step5 from '../Step5/Step5';
import './Steps.scss';

interface StepsProps {
    currentStep: number;
    setCurrentStep: Dispatch<SetStateAction<number>>;
    name: inputType;
    setName: Dispatch<SetStateAction<inputType>>;
    email: inputType;
    setEmail: Dispatch<SetStateAction<inputType>>;
    tel: inputType;
    setTel: Dispatch<SetStateAction<inputType>>;
    plan: planType;
    setPlan: Dispatch<SetStateAction<planType>>;
    addOns: addOn[];
    setAddOns: Dispatch<SetStateAction<addOn[]>>;
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
        <Step3 addOns={props.addOns} setAddOns={props.setAddOns} />,
        <Step4 plan={props.plan} addOns={props.addOns} setCurrentStep={props.setCurrentStep} />,
        <Step5 />
    ];

    return <div className="steps">{stepList[props.currentStep - 1]}</div>;
};

export default Steps;
