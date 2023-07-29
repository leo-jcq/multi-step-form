import { FC } from 'react';
import MenuItem from '../StepMenuItem/StepMenuItem';
import './StepMenu.scss';

interface StepMenuProps {
    currentStep: number;
    changeStep: (newStep: number) => void;
}

const StepMenu: FC<StepMenuProps> = ({ currentStep, changeStep }) => {
    return (
        <menu className="stepMenu">
            <MenuItem step={1} currentStep={currentStep} changeStep={changeStep} />
            <MenuItem step={2} currentStep={currentStep} changeStep={changeStep} />
            <MenuItem step={3} currentStep={currentStep} changeStep={changeStep} />
            <MenuItem step={4} currentStep={currentStep} changeStep={changeStep} />
        </menu>
    );
};

export default StepMenu;
