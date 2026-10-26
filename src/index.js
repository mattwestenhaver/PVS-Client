import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initAnalytics } from './analytics';

initAnalytics();

ReactDOM.render(<App />, document.getElementById('root'));

// Older builds installed a service worker that cached the whole site. Remove any that are still registered.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => registration.unregister());
    });
}
