import { FC, useState } from 'react';
import './App.scss';
import ControlBar from './components/ControlBar/ControlBar';
import StepMenu from './components/StepMenu/StepMenu';

const App: FC = () => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className="app">
            <StepMenu currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <ControlBar currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
    );
};

export default App;
