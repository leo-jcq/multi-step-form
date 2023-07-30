import { Dispatch, FC, SetStateAction } from 'react';
import addOnsList from '../../constants/addOnsList';
import AddOnOption from '../AddOnOption/AddOnOption';
import Step from '../Step/Step';
import './Step3.scss';

interface Step3Props {
    addOns: addOnType[];
    setAddOns: Dispatch<SetStateAction<addOnType[]>>;
}

const Step3: FC<Step3Props> = ({ addOns, setAddOns }) => {
    return (
        <Step
            number={3}
            title="Pick add-ons"
            description="Add-ons help enhance your gaming experience">
            {addOnsList.map((addOn) => (
                <AddOnOption
                    addOn={addOn}
                    selected={addOns.includes(addOn)}
                    setAddOns={setAddOns}
                />
            ))}
        </Step>
    );
};

export default Step3;
