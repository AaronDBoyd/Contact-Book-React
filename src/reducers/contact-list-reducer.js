const reducer = (state = {}, action) => {
  const { name, phone, email, id } = action;
  switch (action.type) {
    case "ADD_CONTACT":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          phone: phone,
          email: email,
          id: id,
        },
      });
    default:
      return state;
  }
};

export default reducer;
