import React from 'react'
import PropTypes from 'prop-types'

function Contact(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenContactClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <h4>Phone: {props.phone}</h4>
        <h4>Email: {props.email}</h4>
      </div>
    </React.Fragment>
  )
}

Contact.propTypes = {}

export default Contact
