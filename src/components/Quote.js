import { useState, useEffect, useRef } from 'react';
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

const Quote = () => {
    const [redirect, setRedirect] = useState(false);
    const name = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const address = useRef(null);
    const city = useRef(null);
    const zipcode = useRef(null);
    const eventDate = useRef(null);
    const eventType = useRef(null);
    const guests = useRef(null);
    const cars = useRef(null);
    const arrival = useRef(null);
    const departure = useRef(null);
    const comments = useRef(null);
    const reference = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        auth.load().then(success => {
            console.log(success);
        });
    }, []);

    const formSubmit = () => {
        if (
            name.current.value === '' ||
            email.current.value === '' ||
            phone.current.value === '' ||
            address.current.value === '' ||
            city.current.value === '' ||
            zipcode.current.value === '' ||
            eventDate.current.value === '' ||
            eventType.current.value === '' ||
            guests.current.value === '' ||
            cars.current.value === '' ||
            arrival.current.value === '' ||
            departure.current.value === '' ||
            comments.current.value === '' ||
            reference.current.value === ''
        ) {
            toast.error('Fill out all the fields before submitting.', {
                position: toast.POSITION.TOP_CENTER,
            });
        } else {
            const quoteData = {
                name: name.current.value,
                email: email.current.value,
                phone: phone.current.value,
                address: address.current.value,
                city: city.current.value,
                zipcode: zipcode.current.value,
                arrival: arrival.current.value,
                departure: departure.current.value,
                eventDate: eventDate.current.value,
                eventType: eventType.current.value,
                guests: guests.current.value,
                cars: cars.current.value,
                comments: comments.current.value,
                reference: reference.current.value,
            };

            auth.quoteEmail(quoteData).then(success => {
                console.log(success);

                toast.success('Your request has been submitted.', {
                    position: toast.POSITION.TOP_CENTER,
                });

                setTimeout(() => setRedirect(true), 5000);
                name.current.value = '';
                email.current.value = '';
                phone.current.value = '';
                address.current.value = '';
                city.current.value = '';
                zipcode.current.value = '';
                eventDate.current.value = '';
                eventType.current.value = '';
                arrival.current.value = '';
                departure.current.value = '';
                guests.current.value = '';
                cars.current.value = '';
                comments.current.value = '';
                reference.current.value = '';
            });
        }
    };

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
                            <input type="text" ref={name} placeholder="Your Name" />
                        </Form.Field>

                        <Form.Field>
                            <input type="text" ref={email} placeholder="Email Address" />
                        </Form.Field>

                        <Form.Field>
                            <input type="text" ref={phone} placeholder="Phone Number" />
                        </Form.Field>

                        <Form.Field>
                            <input type="text" ref={address} placeholder="Event Address" />
                        </Form.Field>

                        <Form.Group>
                            <input type="text" ref={city} placeholder="City of Event" />
                            <input type="number" ref={zipcode} placeholder="Event Zipcode" />
                        </Form.Group>

                        <Form.Group>
                            <input type="text" ref={eventDate} placeholder="Date of Event" />
                            <input type="text" ref={eventType} placeholder="Type of Event" />
                        </Form.Group>

                        <Form.Group>
                            <input type="number" ref={guests} placeholder="Number of Guests" />
                            <input type="number" ref={cars} placeholder="Number of Cars" />
                        </Form.Group>

                        <Form.Group>
                            <input type="text" ref={arrival} placeholder="Guest Arrival Time" />
                            <input type="text" ref={departure} placeholder="Guest Departure Time" />
                        </Form.Group>

                        <Form.Field>
                            <textarea
                                ref={comments}
                                rows="4"
                                placeholder="What are the parking conditions like? Any other comments or questions?"
                            />
                        </Form.Field>

                        <Form.Field>
                            <input type="text" ref={reference} placeholder="How did you hear about us?" />
                        </Form.Field>

                        <Form.Field>
                            <Button color="black" size="massive">
                                Submit
                            </Button>
                        </Form.Field>

                        <ToastContainer />
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Quote;
