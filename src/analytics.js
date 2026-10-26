// Google Analytics 4. Only loads in production builds (npm run build), so local development doesn't send data.
// Page views on route changes are tracked by GA4's enhanced measurement ("page changes based on
// browser history events"), which is on by default.
const measurementId = 'G-9M7N51GPH9';

export const initAnalytics = () => {
    if (!import.meta.env.PROD) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
};

export const trackEvent = (name, params) => {
    if (window.gtag) window.gtag('event', name, params);
};
