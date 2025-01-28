import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import QuotesAccordion from './QuotesAccordion';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class Quotes extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
        };
    }

    handleLogin(evt) {
        evt.preventDefault();
        if (this.refs.password.value === 'Cahuenga818!') {
            this.setState({
                loggedIn: true,
            });
        } else {
            toast.error('Incorrect password. Please try again.', {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }

    render() {
        return (
            <div className="view-quotes__container">
                {!this.state.loggedIn ? (
                    <>
                        <Form className="login" onSubmit={this.handleLogin.bind(this)}>
                            <h2>Please login to view quotes</h2>
                            <Form.Field>
                                <input type="password" ref="password" placeholder="Password" />
                            </Form.Field>
                            <Button className="login-button" size="big">
                                Log In
                            </Button>
                        </Form>
                        <ToastContainer />
                    </>
                ) : (
                    <QuotesAccordion />
                )}
            </div>
        );
    }
}

export default Quotes;
