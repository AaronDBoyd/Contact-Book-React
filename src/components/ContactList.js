import React from "react";
import Contact from "./Contact";
import PropTypes from 'prop-types';


export default function ContactList(props) {
  return (
    <React.Fragment>
      {Object.values(props.contactList).map((contact, index) => (
        <Contact
          whenContactClicked = { props.onContactSelection }
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          id= {contact.id}
          key={contact.id}
        />
      ))}
    </React.Fragment>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.object,
  onContactSelection: PropTypes.func
};