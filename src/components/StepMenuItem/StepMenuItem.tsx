import { FC } from 'react';
import './StepMenuItem.scss';

interface StepMenuItemProps {
    step: number;
    name: string;
    currentStep: number;
    changeStep: (newStep: number) => void;
}

const StepMenuItem: FC<StepMenuItemProps> = ({ step, name, currentStep, changeStep }) => (
    <li
        className={`stepMenuItem${currentStep === step ? ' active' : ''}`}
        onClick={() => changeStep(step)}>
        <button className="btn">{step}</button>
        
        <p className="text">
            <span className="number">Step {step}</span>
            <span className="name">{name}</span>
        </p>
    </li>
);

export default StepMenuItem;
