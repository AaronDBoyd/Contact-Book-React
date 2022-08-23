import React from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

export default function ContactList(props) {
  useFirestoreConnect([{ collection: "contacts" }]);

  // const contacts = useSelector((state) => state.firestore.ordered.contacts);
  const contacts = useSelector((state) => state.ordered.contacts);

  if (isLoaded(contacts)) {
    return (
      <React.Fragment>
        {console.log(contacts[0])}
        {contacts.map((contact) => (
          
          <Contact
            whenContactClicked={props.onContactSelection}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
            timeOpen={contact.timeOpen}
            id={contact.id}
            key={contact.id}
          />
        ))}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

ContactList.propTypes = {
  // contactList: PropTypes.object,
  onContactSelection: PropTypes.func,
};
