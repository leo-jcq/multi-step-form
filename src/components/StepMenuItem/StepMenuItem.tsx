import { Dispatch, FC, SetStateAction } from 'react';
import './StepMenuItem.scss';

interface StepMenuItemProps {
    step: number;
    currentStep: number;
    changeStep: (newStep: number) => void;
}

const StepMenuItem: FC<StepMenuItemProps> = ({ step, currentStep, changeStep }) => (
    <li
        className={`stepMenuItem${currentStep === step ? ' active' : ''}`}
        onClick={() => changeStep(step)}>
        {step}
    </li>
);

export default StepMenuItem;
