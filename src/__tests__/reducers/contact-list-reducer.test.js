import contactListReducer from '../../reducers/contact-list-reducer';

describe('contactListReducer', () => {

  let action;
  const contactData = {
    name: "Aaron",
    phone: "702-666-6666",
    email: "aaron@aaron.aaron",
    id: 1
  };

  test('Should return default state if there is no action type passed onto the reducer', () => {
    expect(contactListReducer({}, { type: null })).toEqual({});
  })

  test('Should successfully add new contact data to mainContactList', () => {
    const { name, phone, email, id } = contactData;
    action = {
      type: "ADD_CONTACT",
      name: name,
      phone: phone,
      email: email, 
      id: id
    }

    expect(contactListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        phone: phone,
        email: email,
        id: id
      }
    })
  })
})