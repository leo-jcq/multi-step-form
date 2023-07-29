import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import './TextInput.scss';

interface TextInputProps {
    name: string;
    type: 'text' | 'email' | 'tel';
    placeholder: string;
    value: inputType;
    setValue: Dispatch<SetStateAction<inputType>>;
}

const TextInput: FC<TextInputProps> = ({ type, placeholder, name, value, setValue }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({ value: e.target.value, error: false });
    };

    return (
        <div className="textInput">
            <label className="label" id={name.replace(' ', '_')}>
                {name}

                {value.error && <span className='error'>This fiels is required</span>}
            </label>
            <input
                className={`input${value.error ? ' error' : ''}`}
                type={type}
                id={name.replace(' ', '_')}
                placeholder={`e.g. ${placeholder}`}
                value={value.value}
                onChange={handleChange}
            />
        </div>
    );
};

export default TextInput;
