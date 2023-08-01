import { FC } from 'react';
import iconThankYou from '../../assets/icon-thank-you.svg';
import Step from '../Step/Step';
import './Step5.scss';

const Step5: FC = () => {
    return (
        <Step number={5}>
            <img src={iconThankYou} alt="Thank you" className="image" />
            <h1 className="title">Thank you!</h1>
            <p className="text">
                Thanks for confirming your subcription ! We hope you have fun using our platform. If
                you ever need support, please feel free to mail us at support@loremgaming.com.
            </p>
        </Step>
    );
};

export default Step5;
