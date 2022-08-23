import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'
import { useFirestore } from 'react-redux-firebase';

function EditContactForm(props) {
  const { contact } = props;
  const firestore = useFirestore();

  function handleEditContactFormSubmission(event) {
    event.preventDefault();
    props.onEditContact();
    const propertiesToUpdate = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      id: contact.id
    }
    return firestore.update({collection: 'contacts', doc: contact.id }, propertiesToUpdate)
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
