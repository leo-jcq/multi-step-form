import { FC } from 'react';
import StepMenuItem from '../StepMenuItem/StepMenuItem';
import './StepMenu.scss';

interface StepMenuProps {
    currentStep: number;
    changeStep: (newStep: number) => void;
}

const StepMenu: FC<StepMenuProps> = ({ currentStep, changeStep }) => {
    return (
        <menu className="stepMenu">
            <StepMenuItem step={1} currentStep={currentStep} changeStep={changeStep} />
            <StepMenuItem step={2} currentStep={currentStep} changeStep={changeStep} />
            <StepMenuItem step={3} currentStep={currentStep} changeStep={changeStep} />
            <StepMenuItem step={4} currentStep={currentStep === 5 ? 4 : currentStep} changeStep={changeStep} />
        </menu>
    );
};

export default StepMenu;
