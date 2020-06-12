import React from 'react'
import auth from '../auth.js'
import { Form, Accordion, Icon, Button } from 'semantic-ui-react';

class Quotes extends React.Component {

    constructor() {
        super()
        this.state = {
            quotes: [],
            archived: [],
            activeIndex: null,
            loggedIn: false
        }
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }

    handleLogin(evt) {
        evt.preventDefault()
        if (this.refs.password.value === 'Cahuenga818!') {
            this.setState({
                loggedIn: true
            })
        }
    }

    archiveQuote(quote) {
        auth.archiveQuote(quote)
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        quotes: this.state.quotes.filter(q => q._id !== quote._id),
                        archived: [...this.state.archived, quote]
                    })
                }
            })
    }

    componentDidMount() {
        auth.getQuotes()
            .then(response => {
                if (response.data.success) {
                    response.data.quotes.forEach(q => {
                        if (!q.archived) {
                            this.setState({ quotes: [...this.state.quotes, q] })
                        } else {
                            this.setState({ archived: [...this.state.archived, q] })
                        }
                    })
                } else {
                    return false
                }
            })
    }

    render() {

        const { activeIndex } = this.state

        return (
            !this.state.loggedIn
                ? <div className="view-quotes-container">
                    <Form className="login" onSubmit={this.handleLogin.bind(this)}>
                        <h2>Please login to view quotes</h2>
                        <Form.Field>
                            <input type='password' ref='password' placeholder='Password' />
                        </Form.Field>
                        <Button className='login-button' size='big'>Log In</Button>
                    </Form> 
                  </div>
                : <div className="view-quotes-container">
                    <h1>Submitted Quotes</h1>
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
        )
    }
}

export default Quotes