import React, { Component } from "react";
import ContactList from "./ContactList";
import NewContactForm from "./NewContactForm";
import ContactDetail from "./ContactDetail";
import EditContactForm from "./EditContactForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
// import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase';

class ContactControl extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      formVisibleOnPage: false,
      // count: 0,
      // mainContactList: [],
      selectedContact: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedContact != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedContact: null,
        editing: false,
      });
    } else {
      // const { dispatch } = this.props;
      // const action = a.toggleForm();
      // dispatch(action);
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewContactToList = (newContact) => {
    // const { dispatch } = this.props;
    // // const { id, name, phone, email } = newContact;
    // // const action = a.addContact(newContact);
    // // dispatch(action);

    // const action2 = a.toggleForm();
    // dispatch(action2);

    
    // const newMainContactList = this.state.mainContactList.concat(newContact);
    this.setState({
      // mainContactList: newMainContactList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedContact = (id) => {
    this.props.firestore.get({collection: 'contacts', doc: id}).then((contact) => {
      const firestoreContact = {
        name: contact.get("name"),
        phone: contact.get("phone"),
        email: contact.get("email"),
        id: contact.id
      }
    this.setState({ selectedContact: firestoreContact });
    })
  };

  handleDeletingContact = (id) => {
    // const { dispatch } = this.props;
    // const action = a.deleteContact(id);
    // dispatch(action);
    // const newMainContactList = this.state.mainContactList.filter(
    //   (contact) => contact.id !== id
    // );
    this.props.firestore.delete({collection: 'contacts', doc: id});
    this.setState({
      // mainContactList: newMainContactList,
      selectedContact: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingContactInList = (contactToEdit) => {
    // const { dispatch } = this.props;
    // // const { id, name, phone, email } = contactToEdit;
    // const action = a.addContact(contactToEdit);
    // dispatch(action)
    // const editedMainContactList = this.state.mainContactList
    //   .filter((contact) => contact.id !== this.state.selectedContact.id)
    //   .concat(contactToEdit);
    this.setState({
      // mainContactList: editedMainContactList,
      editing: false,
      selectedContact: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = 
        <EditContactForm
          contact={this.state.selectedContact}
          onEditContact={this.handleEditingContactInList}
        />
        buttonText = "View Contact List";
    } else if (this.state.selectedContact != null) {
      currentlyVisibleState = (
        <ContactDetail
          contact={this.state.selectedContact}
          onClickingDelete={this.handleDeletingContact}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "View Contact List";
    // } else if (this.props.formVisibleOnPage) {
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewContactForm
          onNewContactCreation={this.handleAddingNewContactToList}
        />
      );
      buttonText = "View Contact List";
    } else {
      currentlyVisibleState = (
        <ContactList
          // contactList={this.props.mainContactList}
          onContactSelection={this.handleChangingSelectedContact}
        />
      );
      buttonText = "Add New Contact";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
ContactControl.propTypes = {
  mainContactList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    mainContactList: state.mainContactList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ContactControl = connect(mapStateToProps)(ContactControl);

export default withFirestore(ContactControl);