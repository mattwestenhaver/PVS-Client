import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Form, Button } from 'semantic-ui-react';
import { Navigate } from 'react-router-dom';

import auth from '../auth.js';
import 'react-toastify/dist/ReactToastify.css';
import ReactGA from 'react-ga';

import MetaData from './common/MetaData.jsx';

export const initGA = () => {
    console.log('GA init');
    ReactGA.initialize('UA-122997893-1');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

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
        initGA();
        logPageView();
        auth.load().then(success => {
            console.log(success);
        });
        return () => clearTimeout(redirectTimeout.current);
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const formSubmit = () => {
        if (Object.values(values).some(value => value === '')) {
            toast.error('Fill out all the fields before submitting.');
            return;
        }

        setSubmitting(true);
        auth.quoteEmail(values)
            .then(success => {
                toast.success('Your request has been submitted.');
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
                    <Form onSubmit={formSubmit}>
                        <Form.Field>
                            <input type="text" placeholder="Your Name" {...inputProps('name')} />
                        </Form.Field>

                        <Form.Field>
                            <input type="text" placeholder="Email Address" {...inputProps('email')} />
                        </Form.Field>

                        <Form.Field>
                            <input type="text" placeholder="Phone Number" {...inputProps('phone')} />
                        </Form.Field>

                        <Form.Field>
                            <input type="text" placeholder="Event Address" {...inputProps('address')} />
                        </Form.Field>

                        <Form.Group>
                            <input type="text" placeholder="City of Event" {...inputProps('city')} />
                            <input type="number" placeholder="Event Zipcode" {...inputProps('zipcode')} />
                        </Form.Group>

                        <Form.Group>
                            <input type="text" placeholder="Date of Event" {...inputProps('eventDate')} />
                            <input type="text" placeholder="Type of Event" {...inputProps('eventType')} />
                        </Form.Group>

                        <Form.Group>
                            <input type="number" placeholder="Number of Guests" {...inputProps('guests')} />
                            <input type="number" placeholder="Number of Cars" {...inputProps('cars')} />
                        </Form.Group>

                        <Form.Group>
                            <input type="text" placeholder="Guest Arrival Time" {...inputProps('arrival')} />
                            <input type="text" placeholder="Guest Departure Time" {...inputProps('departure')} />
                        </Form.Group>

                        <Form.Field>
                            <textarea
                                rows="4"
                                placeholder="What are the parking conditions like? Any other comments or questions?"
                                {...inputProps('comments')}
                            />
                        </Form.Field>

                        <Form.Field>
                            <input type="text" placeholder="How did you hear about us?" {...inputProps('reference')} />
                        </Form.Field>

                        <Form.Field>
                            <Button color="black" size="massive" loading={submitting} disabled={submitting}>
                                Submit
                            </Button>
                        </Form.Field>

                        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Quote;
