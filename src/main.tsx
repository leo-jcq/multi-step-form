import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import BillingProvider from './contexts/BillingContext.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BillingProvider>
            <App />
        </BillingProvider>
    </StrictMode>
);
