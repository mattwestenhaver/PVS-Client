import axios from 'axios';

// For a local server, use 'http://localhost:3001/'
const request = axios.create({ baseURL: 'https://pvs-server.herokuapp.com/' });

const FALLBACK_ERROR = 'Something went wrong. Please try again, or call us at (323) 876-5816.';

// The server responds with { success: false, message } when a submission fails
// (500) or is rate limited (429). Rethrow with that message so forms can show it.
const toSubmissionError = error => {
    throw new Error(error.response?.data?.message || FALLBACK_ERROR);
};

const post = (url, data) =>
    request
        .post(url, data)
        .then(response => response.data.success)
        .catch(toSubmissionError);

// The server sleeps when idle. The form pages ping it on load so it's awake by the time someone submits.
export const wakeServer = () => {
    request.get('/').catch(() => {});
};

export const sendQuote = quote => post('/email/quote', quote);

export const sendApplication = application => post('/email/work', application);
