import { FC, useState } from 'react';
import './App.scss';
import ControlBar from './components/ControlBar/ControlBar';
import StepMenu from './components/StepMenu/StepMenu';
import Steps from './components/Steps/Steps';
import plans from './constants/plans';
import { mailRegex, telRegex } from './constants/regexs';

const App: FC = () => {
    // States
    const [currentStep, setCurrentStep] = useState(1);
    // Step 1
    const [name, setName] = useState<inputType>({ value: '', error: false });
    const [email, setEmail] = useState<inputType>({ value: '', error: false });
    const [tel, setTel] = useState<inputType>({ value: '', error: false });
    // Step 2
    const [plan, setPlan] = useState(plans[0]);
    // Step 3
    const [addOns, setAddOns] = useState<addOnType[]>([]);

    const changeStep = (newStep: number) => {
        let fixingStep: number | null = null;

        // Step 1 verifications
        // Name verifications
        if (name.value == null || name.value === '') {
            setName((prevName) => ({ ...prevName, error: true }));
            fixingStep = 1;
        }
        // Email verifications
        if (email.value == null || !email.value.match(mailRegex)) {
            setEmail((prevEmail) => ({ ...prevEmail, error: true }));
            fixingStep = 1;
        }
        // Tel verifications
        if (tel.value == null || !tel.value.match(telRegex)) {
            setTel((prevTel) => ({ ...prevTel, error: true }));
            fixingStep = 1;
        }

        setCurrentStep(fixingStep === null ? newStep : fixingStep);
    };

    return (
        <div className="app">
            <StepMenu currentStep={currentStep} changeStep={changeStep} />
            <Steps
                currentStep={currentStep}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                tel={tel}
                setTel={setTel}
                plan={plan}
                setPlan={setPlan}
                addOns={addOns}
                setAddOns={setAddOns}
            />
            <ControlBar currentStep={currentStep} changeStep={changeStep} />
        </div>
    );
};

export default App;
