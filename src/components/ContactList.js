import React from "react";
import Contact from "./Contact";

const tempContactList = [
  {
    name: "Zara",
    phone: "702-333-4444",
    email: "puppy@dog.com",
  },
  {
    name: "Dew",
    phone: "702-333-4444",
    email: "puppy@dog.com",
  },
  {
    name: "Dew",
    phone: "702-333-4444",
    email: "puppy@dog.com",
  },
];

export default function ContactList() {
  return (
    <React.Fragment>
      {tempContactList.map((contact, index) => (
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