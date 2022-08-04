import React, { Component } from 'react'
import ContactList from './ContactList'
import NewContactForm from './NewContactForm';

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
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewContactForm />;
      buttonText= "View Contact List";
    } else { 
      currentlyVisibleState = <ContactList />;
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
