import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { initAnalytics } from './analytics';

initAnalytics();

createRoot(document.getElementById('root')).render(<App />);

// Older builds installed a service worker that cached the whole site. Remove any that are still registered.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => registration.unregister());
    });
}
