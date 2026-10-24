import React, { useState, useRef } from 'react';
import { Form, Button } from 'semantic-ui-react';
import QuotesAccordion from './QuotesAccordion';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Quotes = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const passwordRef = useRef(null);

    const handleLogin = evt => {
        evt.preventDefault();

        if (passwordRef.current.value === 'Cahuenga818!') {
            setIsLoggedIn(true);
        } else {
            toast.error('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="view-quotes__container">
            {!isLoggedIn ? (
                <>
                    <Form className="login" onSubmit={handleLogin}>
                        <h2>Please login to view quotes</h2>
                        <Form.Field>
                            <input type="password" ref={passwordRef} placeholder="Password" />
                        </Form.Field>
                        <Button className="login-button" size="big">
                            Log In
                        </Button>
                    </Form>
                    <ToastContainer position={toast.POSITION.TOP_RIGHT} />
                </>
            ) : (
                <QuotesAccordion />
            )}
        </div>
    );
};

export default Quotes;
