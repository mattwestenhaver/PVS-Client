import React from 'react'
import { Accordion, Icon, Button } from 'semantic-ui-react';
import auth from '../../auth.js'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

class QuotesAccordion extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            quotes: props.quotes.filter(q => q.archived === false),
            activeIndex: null
        }
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }

    archiveQuote(quote) {
        auth.archiveQuote(quote)
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        quotes: this.state.quotes.filter(q => q._id !== quote._id)
                    })
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
                    this.setState({
                        quotes: this.state.quotes.filter(q => q._id !== quote._id)
                    })
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

    render () {

        const { activeIndex } = this.state

        return (
            <div>
                {this.state.quotes.length === 0
                    ?   <h2>No quotes available</h2>
                    :   <div>
                            <h2>Active Quotes</h2>
                            {this.state.quotes.map(q => {
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
                            })}
                        </div>
                }
                <ToastContainer />
            </div>
        )
    }
}

export default QuotesAccordion