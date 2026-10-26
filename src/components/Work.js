import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { toast, ToastContainer } from 'react-toastify';

import MetaData from './common/MetaData.jsx';
import auth from '../auth.js';
import { trackEvent } from '../analytics.js';
import 'react-toastify/dist/ReactToastify.css';

const locationOptions = [
    { key: 0, text: 'Los Angeles County', value: 'Los Angeles County' },
    { key: 1, text: 'Ventura County', value: 'Ventura County' },
    { key: 2, text: 'Orange County', value: 'Orange County' },
    { key: 3, text: 'South Bay', value: 'South Bay' },
];

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reference: '',
    education: '',
    skills: '',
    about: '',
    location: null,
    resume: '',
};

const Work = () => {
    const [values, setValues] = useState(initialValues);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        auth.load().then(success => {
            console.log(success);
        });
    }, []);

    // Native inputs pass only the event; Semantic's Form.Select passes { name, value } as well
    const handleChange = (e, data) => {
        const { name, value } = data || e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const workSubmit = () => {
        if (Object.values(values).some(value => !value)) {
            toast.error('Fill out all the fields before submitting.');
            return;
        }

        setSubmitting(true);
        auth.workEmail(values)
            .then(() => {
                toast.success('Your information has been successfully submitted.');
                trackEvent('job_application', { location: values.location });
                setValues(initialValues);
            })
            .catch(error => {
                toast.error(error.message);
            })
            .finally(() => setSubmitting(false));
    };

    const inputProps = name => ({ name, value: values[name], onChange: handleChange });

    return (
        <div>
            <MetaData title="Employment - Premiere Valet Services, Inc." />
            <div className="work__header header-1"></div>
            <div className="work__section-1">
                <div className="work__information">
                    <h3>To work with us you must meet the following requirements:</h3>
                    <ul>
                        <li>You MUST be at least 19 years of age</li>
                        <li>Be able to operate a manual transmission (You will be tested)</li>
                        <li>Possess a clean driving record</li>
                    </ul>
                    <p>
                        All positions are part-time valet attendant roles, and it is required that you are available to
                        work nights and weekends. The job can be physically demanding, and most of the time we are
                        expected to work at night. We work in the cold, heat, rain, etc. Many jobs are located in the
                        hills and you will be expected to run to and from the cars you are parking. There also may be
                        extended periods of standing during a shift.
                    </p>
                    <h3>Please fill out the form below if you are interested in working with us.</h3>

                    <div className="work__form-wrap">
                        <Form onSubmit={workSubmit}>
                            <Form.Field>
                                <label>First Name</label>
                                <input type="text" {...inputProps('firstName')} placeholder="John" />
                            </Form.Field>

                            <Form.Field>
                                <label>Last Name</label>
                                <input type="text" {...inputProps('lastName')} placeholder="Smith" />
                            </Form.Field>

                            <Form.Field>
                                <label>Email Address</label>
                                <input type="text" {...inputProps('email')} placeholder="example@gmail.com" />
                            </Form.Field>

                            <Form.Field>
                                <label>Cell Phone Number</label>
                                <input type="text" {...inputProps('phone')} placeholder="(310) 555-1234" />
                            </Form.Field>

                            <Form.Field>
                                <label>How did you hear about us?</label>
                                <input
                                    type="text"
                                    {...inputProps('reference')}
                                    placeholder="Put employee's name if an employee referred you"
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Education Level</label>
                                <input type="text" {...inputProps('education')} placeholder="High School, GED, etc." />
                            </Form.Field>

                            <Form.Field>
                                <label>Special Skills</label>
                                <input
                                    type="text"
                                    {...inputProps('skills')}
                                    placeholder="List any skills you think we should know about"
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Tell us about yourself</label>
                                <textarea
                                    {...inputProps('about')}
                                    rows="4"
                                    placeholder="Put anything you think we should know"
                                />
                            </Form.Field>

                            <Form.Field>
                                <Form.Select
                                    label="What location are you applying for?"
                                    name="location"
                                    value={values.location}
                                    options={locationOptions}
                                    placeholder="Choose Location"
                                    onChange={handleChange}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Copy and paste your resume below</label>
                                <textarea {...inputProps('resume')} rows="4" placeholder="Resume here" />
                            </Form.Field>

                            <Form.Field>
                                <Button color="black" size="massive" loading={submitting} disabled={submitting}>
                                    Apply
                                </Button>
                            </Form.Field>

                            <ToastContainer position={toast.POSITION.TOP_RIGHT} />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
