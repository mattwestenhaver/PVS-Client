import { useState, useRef, useEffect } from 'react';
import ReactGA from 'react-ga';
import { Form, Button } from 'semantic-ui-react';
import { toast, ToastContainer } from 'react-toastify';

import MetaData from './common/MetaData.jsx';
import auth from '../auth.js';
import 'react-toastify/dist/ReactToastify.css';

export const initGA = () => {
    console.log('GA init');
    ReactGA.initialize('UA-122997893-1');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

const locationOptions = [
    { key: 0, text: 'Los Angeles County', value: 'Los Angeles County' },
    { key: 1, text: 'Ventura County', value: 'Ventura County' },
    { key: 2, text: 'Orange County', value: 'Orange County' },
    { key: 3, text: 'South Bay', value: 'South Bay' },
];

const Work = () => {
    const [location, setLocation] = useState(null);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const reference = useRef(null);
    const education = useRef(null);
    const skills = useRef(null);
    const about = useRef(null);
    const resume = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        initGA();
        logPageView();
        auth.load().then(success => {
            console.log(success);
        });
    }, []);

    const workSubmit = () => {
        if (
            firstName.current.value === '' ||
            lastName.current.value === '' ||
            email.current.value === '' ||
            phone.current.value === '' ||
            reference.current.value === '' ||
            education.current.value === '' ||
            skills.current.value === '' ||
            about.current.value === '' ||
            resume.current.value === '' ||
            location === null
        ) {
            toast.error('Fill out all the fields before submitting.', {
                position: toast.POSITION.TOP_CENTER,
            });
        } else {
            const workData = {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                email: email.current.value,
                phone: phone.current.value,
                reference: reference.current.value,
                education: education.current.value,
                skills: skills.current.value,
                about: about.current.value,
                resume: resume.current.value,
                location,
            };
            auth.workEmail(workData).then(success => {
                console.log(success);

                toast.success('Your information has been successfully submitted.', {
                    position: toast.POSITION.TOP_CENTER,
                });

                firstName.current.value = '';
                lastName.current.value = '';
                email.current.value = '';
                phone.current.value = '';
                reference.current.value = '';
                education.current.value = '';
                skills.current.value = '';
                about.current.value = '';
                resume.current.value = '';
                setLocation(null);
            });
        }
    };

    const handleChange = (e, data) => {
        setLocation(data.value);
    };

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
                                <input type="text" ref={firstName} placeholder="John" />
                            </Form.Field>

                            <Form.Field>
                                <label>Last Name</label>
                                <input type="text" ref={lastName} placeholder="Smith" />
                            </Form.Field>

                            <Form.Field>
                                <label>Email Address</label>
                                <input type="text" ref={email} placeholder="example@gmail.com" />
                            </Form.Field>

                            <Form.Field>
                                <label>Cell Phone Number</label>
                                <input type="text" ref={phone} placeholder="(310) 555-1234" />
                            </Form.Field>

                            <Form.Field>
                                <label>How did you hear about us?</label>
                                <input
                                    type="text"
                                    ref={reference}
                                    placeholder="Put employee's name if an employee referred you"
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Education Level</label>
                                <input type="text" ref={education} placeholder="High School, GED, etc." />
                            </Form.Field>

                            <Form.Field>
                                <label>Special Skills</label>
                                <input
                                    type="text"
                                    ref={skills}
                                    placeholder="List any skills you think we should know about"
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Tell us about yourself</label>
                                <textarea ref={about} rows="4" placeholder="Put anything you think we should know" />
                            </Form.Field>

                            <Form.Field>
                                <Form.Select
                                    label="What location are you applying for?"
                                    name="location"
                                    value={location}
                                    options={locationOptions}
                                    placeholder="Choose Location"
                                    onChange={handleChange}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Copy and paste your resume below</label>
                                <textarea ref={resume} rows="4" placeholder="Resume here" />
                            </Form.Field>

                            <Form.Field>
                                <Button color="black" size="massive">
                                    Apply
                                </Button>
                            </Form.Field>

                            <ToastContainer />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
