import { FC } from 'react';
import './ControlBar.scss';

interface ControlBarProps {
    currentStep: number;
    changeStep: (newStep: number) => void;
}

const ControlBar: FC<ControlBarProps> = ({ currentStep, changeStep }) => {
    const handlePrevStep = () => changeStep(currentStep - 1);

    const handleNextStep = () => changeStep(currentStep + 1);

    return (
        <div className="controlBar">
            {currentStep > 1 && (
                <button className="prev" onClick={handlePrevStep}>
                    Go Back
                </button>
            )}
            {currentStep < 4 && (
                <button className="next" onClick={handleNextStep}>
                    Next Step
                </button>
            )}
            {currentStep === 4 && <button className="confirm">Confirm</button>}
        </div>
    );
};

export default ControlBar;
