import React from 'react'
import PropTypes from 'prop-types'

function ContactDetail(props) {
  const { contact, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>- Contact Detail -</h1>
      <h3>Name: {contact.name}</h3>
      <h4>Phone: {contact.phone}</h4>
      <h4>Email: {contact.email}</h4>
      <hr/>
    </React.Fragment>
  )
}

ContactDetail.propTypes = {
  contact: PropTypes.object,

}

export default ContactDetail
