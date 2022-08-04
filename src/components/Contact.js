import React from 'react'
import PropTypes from 'prop-types'

function Contact(props) {
  return (
    <div>
      <h3>Name: {props.name} </h3>
      <p>Phone Number: {props.phone} </p>
      <p>Email: {props.email} </p>
      <hr/>
    </div>
  )
}

Contact.propTypes = {}

export default Contact
