import { Dispatch, FC, SetStateAction } from 'react';
import iconCheckmark from '../../assets/icon-checkmark.svg';
import { BILLING, useBilling } from '../../contexts/BillingContext';
import './AddOnOption.scss';

interface AddOnOptionProps {
    addOn: addOn;
    selected: boolean;
    setAddOns: Dispatch<SetStateAction<addOn[]>>;
}

const AddOnOption: FC<AddOnOptionProps> = ({ addOn, selected, setAddOns }) => {
    const billing = useBilling();

    const handleClick = () => {
        if (selected) {
            setAddOns((prevAddOns) =>
                prevAddOns.filter((currentAddOn) => currentAddOn.name !== addOn.name)
            );
        } else {
            setAddOns((prevAddOns) => [...prevAddOns, addOn]);
        }
    };

    return (
        <div className={`addOnOption${selected ? ' selected' : ''}`} onClick={handleClick}>
            <div className="left">
                <button className="mark">
                    <img src={iconCheckmark} className='image' />
                </button>
                <div className="infos">
                    <span className="name">{addOn.name}</span>
                    <span className="description">{addOn.description}</span>
                </div>
            </div>

            <span className="price">
                ${addOn.prices[billing]}/{BILLING[billing]}
            </span>
        </div>
    );
};

export default AddOnOption;
