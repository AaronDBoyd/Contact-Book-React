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
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewContactForm />
    } else { 
      currentlyVisibleState = <ContactList />
    }


    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>Button</button>
      </React.Fragment>
    )
  }
}
