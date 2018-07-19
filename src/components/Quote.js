import React from 'react'
import { Helmet } from "react-helmet";

class Quote extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Request A Quote - Premiere Valet Services</title>
        </Helmet>
        <h1>Request A Quote</h1>
      </div>
    )
  }
}

export default Quote