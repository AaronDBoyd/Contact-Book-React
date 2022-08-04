import React from 'react'
import ReusableForm from './ReusableForm'
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

export default function NewContactForm(props) {

  function handleNewContactFormSubmission(event) {
    event.preventDefault();
    props.onNewContactCreation({
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      id: v4()
    });
  }


  return (
    <React.Fragment>
      <h1>- Add a Contact -</h1>
      <ReusableForm
        formSubmissionHandler={handleNewContactFormSubmission}
        buttonText='Add Contact'
      />
    </React.Fragment>
  )
}

NewContactForm.propTypes = {
  onNewContactCreation: PropTypes.func
};