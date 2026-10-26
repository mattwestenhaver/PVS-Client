import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App';
import { initAnalytics } from './lib/events';

initAnalytics();

createRoot(document.getElementById('root')).render(<App />);

// Older builds installed a service worker that cached the whole site. Remove any that are still registered.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => registration.unregister());
    });
}
