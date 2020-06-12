import React from 'react'
import auth from '../../auth.js'
import { Form, Button } from 'semantic-ui-react';
import QuotesAccordion from './QuotesAccordion.jsx'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

class Quotes extends React.Component {

    constructor() {
        super()
        this.state = {
            allQuotes: [],
            filteredQuotes: [],
            activeIndex: null,
            loggedIn: false,
            showActive: true
        }
    }

    handleLogin(evt) {
        evt.preventDefault()
        if (this.refs.password.value === 'Cahuenga818!') {
            this.setState({
                loggedIn: true
            })
        } else {
            toast.error('Incorrect password. Please try again.', {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

    changeView(value) {
        this.setState({
            activeIndex: -1,
            showActive: value
        })
        if (value === true) {
            this.setState({
                filteredQuotes: this.state.allQuotes.filter(q => q.archived === false)
            })
        } else {
            this.setState({
                filteredQuotes: this.state.allQuotes.filter(q => q.archived === true)
            })
        }
    }

    componentDidMount() {
        auth.getQuotes()
            .then(response => {
                if (response.data.success) {
                    this.setState({ 
                        allQuotes: response.data.quotes,
                        filteredQuotes: response.data.quotes.filter(q => q.archived === false)
                    })
                }
            })
    }

    render() {

        const { showActive } = this.state

        return (
            !this.state.loggedIn
                ?   <div className="view-quotes-container">
                        <Form className="login" onSubmit={this.handleLogin.bind(this)}>
                            <h2>Please login to view quotes</h2>
                            <Form.Field>
                                <input type='password' ref='password' placeholder='Password' />
                            </Form.Field>
                            <Button className='login-button' size='big'>Log In</Button>
                        </Form> 
                        <ToastContainer />
                    </div>
                :   <div className="view-quotes-container">
                        {/* {showActive === true
                            ? <Button size='huge' onClick={this.changeView.bind(this, false)}>Show Archived</Button>
                            : <Button size='huge' onClick={this.changeView.bind(this, true)}>Show Active</Button>
                        } */}
                        <QuotesAccordion quotes={this.state.allQuotes} />
                    </div>
        )
    }
}

export default Quotes