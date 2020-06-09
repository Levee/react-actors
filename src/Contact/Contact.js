import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Best Impression" />
        <button id="submit">Join Us!</button>
        <p>Phone: 1-800-REACTOR</p>
        <p>Email: info@ReactActors.com</p>
      </div>
    )
  }
}

export default Contact;