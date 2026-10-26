import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Navigate } from 'react-router';

import { sendQuote, wakeServer } from '../../lib/api';
import { trackEvent } from '../../lib/events';

import MetaData from '../../components/MetaData';
import './styles.css';

const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipcode: '',
    eventDate: '',
    eventType: '',
    guests: '',
    cars: '',
    arrival: '',
    departure: '',
    comments: '',
    reference: '',
};

const Quote = () => {
    const [values, setValues] = useState(initialValues);
    const [redirect, setRedirect] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const redirectTimeout = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        wakeServer();
        return () => clearTimeout(redirectTimeout.current);
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const formSubmit = e => {
        e.preventDefault();
        if (Object.values(values).some(value => value === '')) {
            toast.error('Fill out all the fields before submitting.');
            return;
        }

        setSubmitting(true);
        sendQuote(values)
            .then(() => {
                toast.success('Your request has been submitted.');
                trackEvent('generate_lead', { form: 'quote', event_type: values.eventType });
                redirectTimeout.current = setTimeout(() => setRedirect(true), 5000);
                setValues(initialValues);
            })
            .catch(error => {
                toast.error(error.message);
            })
            .finally(() => setSubmitting(false));
    };

    const inputProps = name => ({ name, value: values[name], onChange: handleChange });

    return redirect ? (
        <Navigate to="/confirmation" />
    ) : (
        <div>
            <MetaData title="Request A Quote - Premiere Valet Services, Inc." />
            <div className="request__section-1">
                <div className="request__form-wrap">
                    <h2>Request A Quote</h2>
                    <form className="ui form" onSubmit={formSubmit}>
                        <div className="field">
                            <input type="text" placeholder="Your Name" {...inputProps('name')} />
                        </div>

                        <div className="field">
                            <input type="text" placeholder="Email Address" {...inputProps('email')} />
                        </div>

                        <div className="field">
                            <input type="text" placeholder="Phone Number" {...inputProps('phone')} />
                        </div>

                        <div className="field">
                            <input type="text" placeholder="Event Address" {...inputProps('address')} />
                        </div>

                        <div className="fields">
                            <input type="text" placeholder="City of Event" {...inputProps('city')} />
                            <input type="number" placeholder="Event Zipcode" {...inputProps('zipcode')} />
                        </div>

                        <div className="fields">
                            <input type="text" placeholder="Date of Event" {...inputProps('eventDate')} />
                            <input type="text" placeholder="Type of Event" {...inputProps('eventType')} />
                        </div>

                        <div className="fields">
                            <input type="number" placeholder="Number of Guests" {...inputProps('guests')} />
                            <input type="number" placeholder="Number of Cars" {...inputProps('cars')} />
                        </div>

                        <div className="fields">
                            <input type="text" placeholder="Guest Arrival Time" {...inputProps('arrival')} />
                            <input type="text" placeholder="Guest Departure Time" {...inputProps('departure')} />
                        </div>

                        <div className="field">
                            <textarea
                                rows="4"
                                placeholder="What are the parking conditions like? Any other comments or questions?"
                                {...inputProps('comments')}
                            />
                        </div>

                        <div className="field">
                            <input type="text" placeholder="How did you hear about us?" {...inputProps('reference')} />
                        </div>

                        <div className="field">
                            <button
                                type="submit"
                                className={`ui black massive button${submitting ? ' loading disabled' : ''}`}
                                disabled={submitting}
                            >
                                Submit
                            </button>
                        </div>

                        <ToastContainer position="top-right" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Quote;
