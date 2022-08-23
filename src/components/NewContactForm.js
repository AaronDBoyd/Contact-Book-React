import React from 'react'
import ReusableForm from './ReusableForm'
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
import { useFirestore } from 'react-redux-firebase'

export default function NewContactForm(props) {

  const firestore = useFirestore();

  function addContactToFirestore(event) {
    event.preventDefault();

    props.onNewContactCreation();
    

    return firestore.collection('contacts').add(
      {
        name: event.target.name.value,
        phone: event.target.phone.value,
        email: event.target.email.value,
        // timeOpen: firestore.FieldValue.serverTimestamp()
        timeOpen: new Date().toDateString()
      }
    )
  }

  // function handleNewContactFormSubmission(event) {
  //   event.preventDefault();
  //   props.onNewContactCreation({
  //     name: event.target.name.value,
  //     phone: event.target.phone.value,
  //     email: event.target.email.value,
  //     id: v4()
  //   });
  // }


  return (
    <React.Fragment>
      <h1>- Add a Contact -</h1>
      <ReusableForm
        // formSubmissionHandler={handleNewContactFormSubmission}
        formSubmissionHandler={addContactToFirestore}
        buttonText='Add Contact'
      />
    </React.Fragment>
  )
}

NewContactForm.propTypes = {
  onNewContactCreation: PropTypes.func
};