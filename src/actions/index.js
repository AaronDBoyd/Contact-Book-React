export const deleteContact = id => ({
  type: 'DELETE_CONTACT',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
})

export const addContact = (contact) => {
  const { name, phone, email, id } = contact;
  return {
    type: 'ADD_CONTACT',
    name: name,
    phone: phone,
    email: email,
    id: id
  }
}