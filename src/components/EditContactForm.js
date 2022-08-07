import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'

function EditContactForm(props) {
  const { contact } = props;

  function handleEditContactFormSubmission(event) {
    event.preventDefault();
    props.onEditContact({
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      id: contact.id
    })
  }

  return (
    <React.Fragment>
      <h1>- Edit Contact -</h1>
      <ReusableForm 
      formSubmissionHandler={handleEditContactFormSubmission}
      buttonText="Update Contact" />
    </React.Fragment>
  );
}

EditContactForm.propTypes = {
  contact: PropTypes.object,
  onEditContact: PropTypes.func
}

export default EditContactForm
