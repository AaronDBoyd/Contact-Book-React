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
      <button onClick={ props.onClickingEdit }>Update Contact</button>
      <button onClick={()=> onClickingDelete(contact.id) }>Delete Contact</button>
      <hr/>
    </React.Fragment>
  )
}

ContactDetail.propTypes = {
  contact: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default ContactDetail
