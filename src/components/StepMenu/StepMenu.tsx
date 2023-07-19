import { Dispatch, FC, SetStateAction } from 'react';
import MenuItem from '../StepMenuItem/StepMenuItem';
import './StepMenu.scss';

interface StepMenuProps {
    currentStep: number;
    setCurrentStep: Dispatch<SetStateAction<number>>;
}

const StepMenu: FC<StepMenuProps> = ({ currentStep, setCurrentStep }) => {
    return (
        <menu className="stepMenu">
            <MenuItem step={1} currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <MenuItem step={2} currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <MenuItem step={3} currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <MenuItem step={4} currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </menu>
    );
};

export default StepMenu;
