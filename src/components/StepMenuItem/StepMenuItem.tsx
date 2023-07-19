import { Dispatch, FC, SetStateAction } from 'react';
import './StepMenuItem.scss';

interface StepMenuItemProps {
    step: number;
    currentStep: number;
    setCurrentStep: Dispatch<SetStateAction<number>>;
}

const StepMenuItem: FC<StepMenuItemProps> = ({ step, currentStep, setCurrentStep }) => (
    <li
        className={`stepMenuItem${currentStep === step ? ' active' : ''}`}
        onClick={() => setCurrentStep(step)}>
        {step}
    </li>
);

export default StepMenuItem;
