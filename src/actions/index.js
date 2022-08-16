import * as c from './ActionTypes';

export const deleteContact = id => ({
  type: c.DELETE_CONTACT,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})

export const addContact = (contact) => {
  const { name, phone, email, id } = contact;
  return {
    type: c.ADD_CONTACT,
    name: name,
    phone: phone,
    email: email,
    id: id
  }
}