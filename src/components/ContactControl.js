import React, { Component } from 'react'
import ContactList from './ContactList'
import NewContactForm from './NewContactForm';
import ContactDetail from './ContactDetail'

export default class ContactControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisableOnPage: false,
      count: 0,
      mainContactList: [],
      selectedContact: null,
      editing: false
    }
  }

  handleClick = () => {
      if (this.state<selectedContact != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedContact: null,
          editing: false
        });
      } else {
        this.setState(prevState => ({
          formVisableOnPage: !prevState.formVisableOnPage
        }))
      }
    };
  

  handleAddingNewContactToList = (newContact) => {
    const newMainContactList = this.state.mainContactList.concat(newContact);
    this.setState({
      mainContactList: newMainContactList,
      formVisibleOnPage: false
    });
  };

  handleChangingSelectedContact = (id) => {
    const selectedContact = this.state.mainContactList.filter(contact => contact.id === id)[0];
    this.setState({selectedContact: selectedContact});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedContact != null) {
      currentlyVisibleState = < ContactDetail contact = {this.state.selectedContact} />
      buttonText= "View Contact List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewContactForm onNewContactCreation={this.handleAddingNewContactToList} />;
      buttonText= "View Contact List";
    } else { 
      currentlyVisibleState = <ContactList contactList={this.state.mainContactList}
                                onContactSelection={this.handleChangingSelectedContact} />;
      buttonText = "Add New Contact"
    }


    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}
