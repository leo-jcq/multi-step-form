import { Dispatch, FC, SetStateAction, useMemo } from 'react';
import { BILLING, isMonthly, useBilling } from '../../contexts/BillingContext';
import Step from '../Step/Step';
import './Step4.scss';

interface Step4Props {
    plan: planType;
    addOns: addOn[];
    setCurrentStep: Dispatch<SetStateAction<number>>;
}

const Step4: FC<Step4Props> = ({ plan, addOns, setCurrentStep }) => {
    const billing = useBilling();

    /* const total = useMemo(() => plan.prices[billing] + addOns.forEach(addOn => addOn.prices[billing]), [plan, billing]) */
    const total = useMemo(
        () => plan.prices[billing] + addOns.reduce((acc, addOn) => acc + addOn.prices[billing], 0),
        [plan, addOns, billing]
    );

    return (
        <Step
            number={4}
            title="Finishing up"
            description="Double-check everything looks OK before confirming">
            <div className="elements">
                <div className="element plan">
                    <div className="description">
                        <span className="name">
                            {plan.name}({billing})
                        </span>
                        <button className="change" onClick={() => setCurrentStep(2)}>
                            Change
                        </button>
                    </div>

                    <span className="price">
                        ${plan.prices[billing]}/{BILLING[billing]}
                    </span>
                </div>

                <hr className="separator" />

                {addOns.map((addOn) => (
                    <div key={addOn.name} className="element">
                        <span className="name">{addOn.name}</span>
                        <span className="price">
                            +${addOn.prices[billing]}/{BILLING[billing]}
                        </span>
                    </div>
                ))}
            </div>

            <div className="total element">
                <span className="name">Total (per {isMonthly(billing) ? 'month' : 'year'})</span>
                <span className="price">
                    ${total}/{BILLING[billing]}
                </span>
            </div>
        </Step>
    );
};

export default Step4;
