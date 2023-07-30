import { Dispatch, FC, SetStateAction } from 'react';
import { BILLING, isMonthly, useBilling } from '../../contexts/BillingContext';
import './PlanOption.scss';

interface PlanOptionProps {
    plan: planType;
    selected?: boolean;
    setPlan: Dispatch<SetStateAction<planType>>;
}

const PlanOption: FC<PlanOptionProps> = ({ plan, selected, setPlan }) => {
    const billing = useBilling();

    return (
        <div className={`planOption${selected ? ' selected' : ''}`} onClick={() => setPlan(plan)}>
            <img src={plan.image} alt="" />

            <div className="container">
                <span className="name">{plan.name}</span>
                <span className="price">
                    ${plan.prices[billing]}/{BILLING[billing]}
                </span>
                {!isMonthly(billing) && <span className="free">2 months free</span>}
            </div>
        </div>
    );
};

export default PlanOption;
