import { Dispatch, FC, SetStateAction } from 'react';
import plans from '../../constants/plans';
import PlanOption from '../PlanOption/PlanOption';
import Step from '../Step/Step';
import SwitchButton from '../SwitchButton/SwitchButton';
import './Step2.scss';

interface Step2Props {
    plan: planType;
    setPlan: Dispatch<SetStateAction<planType>>;
}

const Step2: FC<Step2Props> = ({ plan, setPlan }) => {
    return (
        <Step
            number={2}
            title="Select your plan"
            description="You have the option of monthly or yearly billing.">
            <div className="plan">
                {plans.map((planMap) => (
                    <PlanOption
                        plan={planMap}
                        selected={planMap.name === plan.name}
                        setPlan={setPlan}
                    />
                ))}
            </div>

            <SwitchButton />
        </Step>
    );
};

export default Step2;
