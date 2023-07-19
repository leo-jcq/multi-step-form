import { Dispatch, FC, SetStateAction } from 'react';
import './ControlBar.scss';

interface ControlBarProps {
    currentStep: number;
    setCurrentStep: Dispatch<SetStateAction<number>>;
}

const ControlBar: FC<ControlBarProps> = ({ currentStep, setCurrentStep }) => {
    const handlePrevStep = () => {
        setCurrentStep((prevCurrentStep) => prevCurrentStep - 1);
    };

    const handleNextStep = () => setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);

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
