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
            <StepMenuItem step={1} name='Your info' currentStep={currentStep} changeStep={changeStep} />
            <StepMenuItem step={2} name='Select plan' currentStep={currentStep} changeStep={changeStep} />
            <StepMenuItem step={3} name='Add-ons' currentStep={currentStep} changeStep={changeStep} />
            <StepMenuItem step={4} name='Summary' currentStep={currentStep === 5 ? 4 : currentStep} changeStep={changeStep} />
        </menu>
    );
};

export default StepMenu;
