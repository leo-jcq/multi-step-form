import { Dispatch, FC, SetStateAction } from 'react';
import Step from '../Step/Step';
import TextInput from '../TextInput/TextInput';
import './Step1.scss';

interface Step1Props {
    name: inputType;
    setName: Dispatch<SetStateAction<inputType>>;
    email: inputType;
    setEmail: Dispatch<SetStateAction<inputType>>;
    tel: inputType;
    setTel: Dispatch<SetStateAction<inputType>>;
}

const Step1: FC<Step1Props> = (props) => {
    return (
        <Step
            number={1}
            title="Personal info"
            description="Please provide your name, email adress and phone number.">
            <TextInput
                name="Name"
                type="text"
                placeholder="Stephen King"
                value={props.name}
                setValue={props.setName}
            />
            <TextInput
                name="Email Adress"
                type="email"
                placeholder="stephenking@lorem.com"
                value={props.email}
                setValue={props.setEmail}
            />
            <TextInput
                name="Phone Number"
                type="tel"
                placeholder="+1 234 567 890"
                value={props.tel}
                setValue={props.setTel}
            />
        </Step>
    );
};

export default Step1;
