import { CSSProperties, FC } from 'react';
import {
    isMonthly,
    useBilling,
    useBillingToggle,
    useBillingUpdate
} from '../../contexts/BillingContext';
import './SwitchButton.scss';

const SwitchButton: FC = () => {
    const billing = useBilling();
    const setBilling = useBillingUpdate();
    const toggleBilling = useBillingToggle();

    const circleStyle: CSSProperties = { transform: `translateX(${billing === 'monthly' ? '0' : '100'}%)` };

    return (
        <div className="switchButton">
            <span
                className={`option${isMonthly(billing) ? ' active' : ''}`}
                onClick={() => setBilling('monthly')}>
                Monthly
            </span>
            <button className="switch" onClick={toggleBilling}>
                <span className="circle" style={circleStyle}></span>
            </button>
            <span
                className={`option${!isMonthly(billing) ? ' active' : ''}`}
                onClick={() => setBilling('yearly')}>
                Yearly
            </span>
        </div>
    );
};

export default SwitchButton;
