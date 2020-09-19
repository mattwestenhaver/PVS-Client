import React from 'react'
import { Accordion, Icon, Button } from 'semantic-ui-react';
import auth from '../../auth.js'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

class QuotesAccordion extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            quotes: [],
            viewArchived: false,
            activeIndex: null
        }
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }

    switchView(value) {
        this.setState({
            viewArchived: value,
            activeIndex: -1
        })
        this.getQuotes()
    }

    archiveQuote(quote) {
        auth.archiveQuote(quote)
            .then(response => {
                if (response.data.success) {
                    this.getQuotes()
                    toast.success('Quote archived successfully.', {
                        position: toast.POSITION.TOP_CENTER
                    })
                } else {
                    toast.error('Error while archiving quote.', {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
            })
    }

    activateQuote(quote) {
        auth.activateQuote(quote)
            .then(response => {
                if (response.data.success) {
                    this.getQuotes()
                    toast.success('Quote re-activated successfully.', {
                        position: toast.POSITION.TOP_CENTER
                    })
                } else {
                    toast.error('Error while activating quote.', {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
            })    
    }

    getQuotes() {
        auth.getQuotes()
            .then(response => {
                if (response.data.success) {
                    if (this.state.viewArchived) {
                        this.setState({ 
                            quotes: response.data.quotes.filter(q => q.archived)
                        })
                    } else {
                        this.setState({ 
                            quotes: response.data.quotes.filter(q => !q.archived)
                        })
                    }
                }
            })
    }

    testEmails() {
        const quoteData = {
            name: 'EMAIL NOTIFICATION TEST',
            email: 'info@premierevaletparking.com',
            phone: '1234567890',
            address: 'TEST ADDRESS',
            city: 'TEST CITY',
            zipcode: 12345,
            arrival: 'TEST',
            departure: 'TEST',
            eventDate: 'TEST',
            eventType: 'TEST',
            guests: 10,
            cars: 10,
            comments: 'TEST',
            reference: 'TEST'
        }
        auth.quoteEmail(quoteData).then(success => {
            if (success) {
                return true
            }
            return false
        })
    }

    componentDidMount() {
        this.getQuotes()
    }

    render () {

        const { activeIndex } = this.state

        return (
            <div>
                <Button className="notification-test" size="huge" color='red' onClick={this.testEmails.bind(this)}>Test Email Notifications</Button>
                <div>
                    {this.state.viewArchived === false
                        ?   <div>
                                <h2>Active Quotes</h2>
                                <Button size="huge" onClick={this.switchView.bind(this, true)}>View Archived Quotes</Button>
                            </div>
                        :   <div>
                                <h2>Archived Quotes</h2>
                                <Button size="huge" onClick={this.switchView.bind(this, false)}>View Active Quotes</Button>
                            </div>
                    }
                    {this.state.quotes.length !== 0
                        ?   this.state.quotes.map(q => {
                                return (
                                    <Accordion styled key={q._id} className="quote-container">
                                        <Accordion.Title
                                            active={activeIndex === q._id}
                                            index={q._id}
                                            onClick={this.handleClick}
                                        >
                                            <Icon name='dropdown' />
                                            {q.address}, {q.city} {q.zipcode}
                                            
                                        </Accordion.Title>
                                        <Accordion.Content active={activeIndex === q._id}>
                                            <div>
                                                <h4>Contact Information:</h4>
                                                <ul>
                                                    <li>{q.name}</li>
                                                    <li>{q.email}</li>
                                                    <li>{q.phone}</li>
                                                </ul>
                                                <h4>Event Information:</h4>
                                                <ul>
                                                    <li>Date: {q.eventDate}</li>
                                                    <li>Type: {q.eventType}</li>
                                                    <li>Arrival: {q.arrival}</li>
                                                    <li>Departure: {q.departure}</li>
                                                    <li>Expected Cars: {q.cars}</li>
                                                    <li>Expected Guests: {q.guests}</li>
                                                </ul>
                                                <h4>Comments:</h4>
                                                <p>{q.comments}</p>
                                                {q.archived
                                                    ? <Button size="huge" onClick={this.activateQuote.bind(this, q)}>Activate</Button>
                                                    : <Button size="huge" onClick={this.archiveQuote.bind(this, q)}>Archive</Button>
                                                }
                                            </div>
                                        </Accordion.Content>
                                    </Accordion>
                                )
                            })
                        : <h3>No quotes available</h3>
                    }
                </div>
                <ToastContainer />
            </div>
        )
    }
}

export default QuotesAccordion