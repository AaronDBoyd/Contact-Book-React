import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { name, phone, email, id } = action;
  switch (action.type) {
    case c.ADD_CONTACT:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          phone: phone,
          email: email,
          id: id,
        },
      });
    case c.DELETE_CONTACT:
      let newState = { ...state };
      delete newState[id];
      return newState;  
    default:
      return state;
  }
};

export default reducer;
