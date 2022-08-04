import React from "react";
import Contact from "./Contact";
import PropTypes from 'prop-types';


export default function ContactList(props) {
  return (
    <React.Fragment>
      {props.contactList.map((contact, index) => (
        <Contact
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

ContactList.propTypes = {
  ticketList: PropTypes.array
};