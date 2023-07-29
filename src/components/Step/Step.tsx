import { FC, ReactNode } from 'react';
import './Step.scss';

interface StepProps {
    number: number;
    title?: string;
    description?: string;
    children: ReactNode;
}

const Step: FC<StepProps> = ({ number, title, description, children }) => {
    return (
        <div className={`step step${number}`}>
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
            <div className="content">{children}</div>
        </div>
    );
};

export default Step;
