import contactListReducer from "../../reducers/contact-list-reducer";
import * as c from './../../actions/ActionTypes';

describe("contactListReducer", () => {
  let action;
  const contactData = {
    name: "Aaron",
    phone: "702-666-6666",
    email: "aaron@aaron.aaron",
    id: 1,
  };

  const currentState = {
    1: {
      name: "Aaron",
      phone: "702-666-6666",
      email: "aaron@aaron.aaron",
      id: 1,
    },
    2: {
      name: "Zara",
      phone: "123-456-7890",
      email: "zara@dogz.com",
      id: 2,
    },
  };

  test("Should return default state if there is no action type passed onto the reducer", () => {
    expect(contactListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new contact data to mainContactList", () => {
    const { name, phone, email, id } = contactData;
    action = {
      type: c.ADD_CONTACT,
      name: name,
      phone: phone,
      email: email,
      id: id,
    };

    expect(contactListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        phone: phone,
        email: email,
        id: id,
      },
    });
  });

  test("Should successfully delete a contact", () => {
    action = {
      type: c.DELETE_CONTACT,
      id: 1,
    };
    expect(contactListReducer(currentState, action)).toEqual({
      2: {
        name: "Zara",
        phone: "123-456-7890",
        email: "zara@dogz.com",
        id: 2,
      },
    });
  });
});
