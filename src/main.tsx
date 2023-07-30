import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import BillingProvider from './contexts/BillingContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BillingProvider>
            <App />
        </BillingProvider>
    </StrictMode>
);
