import React, { Component } from "react";
import ContactList from "./ContactList";
import NewContactForm from "./NewContactForm";
import ContactDetail from "./ContactDetail";
import EditContactForm from "./EditContactForm";

export default class ContactControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      count: 0,
      mainContactList: [],
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
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisableOnPage,
      }));
    }
  };

  handleAddingNewContactToList = (newContact) => {
    const newMainContactList = this.state.mainContactList.concat(newContact);
    this.setState({
      mainContactList: newMainContactList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedContact = (id) => {
    const selectedContact = this.state.mainContactList.filter(
      (contact) => contact.id === id
    )[0];
    this.setState({ selectedContact: selectedContact });
  };

  handleDeletingContact = (id) => {
    const newMainContactList = this.state.mainContactList.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      mainContactList: newMainContactList,
      selectedContact: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingContactInList = (contactToEdit) => {
    const editedMainContactList = this.state.mainContactList
      .filter((contact) => contact.id !== this.state.selectedContact.id)
      .concat(contactToEdit);
    this.setState({
      mainContactList: editedMainContactList,
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
          contactList={this.state.mainContactList}
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
