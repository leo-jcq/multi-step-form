/* eslint-disable react-refresh/only-export-components */
import {
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState
} from 'react';

export const BILLING: billingInterface = {
    monthly: 'mo',
    yearly: 'yr'
};

const BillingContext = createContext<billingType>('monthly');
// eslint-disable-next-line @typescript-eslint/no-empty-function
const BillingSetContext = createContext<Dispatch<SetStateAction<billingType>>>(() => {});
// eslint-disable-next-line @typescript-eslint/no-empty-function
const BillingToggleContext = createContext<() => void>(() => {});

export function useBilling() {
    return useContext(BillingContext);
}

export function useBillingUpdate() {
    return useContext(BillingSetContext);
}

export function useBillingToggle() {
    return useContext(BillingToggleContext);
}

export function isMonthly(billing: billingType) {
    return billing === 'monthly';
}

interface BillingProviderProps {
    children: ReactNode;
}

const BillingProvider: FC<BillingProviderProps> = ({ children }) => {
    const [billing, setBilling] = useState<billingType>('monthly');

    const toggleBilling = () => {
        setBilling(isMonthly(billing) ? 'yearly' : 'monthly');
    };

    return (
        <BillingContext.Provider value={billing}>
            <BillingSetContext.Provider value={setBilling}>
                <BillingToggleContext.Provider value={toggleBilling}>
                    {children}
                </BillingToggleContext.Provider>
            </BillingSetContext.Provider>
        </BillingContext.Provider>
    );
};

export default BillingProvider;
