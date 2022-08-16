import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import contactListReducer from "../../reducers/contact-list-reducer";
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainContactList: {},
      formVisibleOnPage: false,
    });
  });

  test("Check that initial state of contactListReducer matches root reducer", () => {
    expect(store.getState().mainContactList).toEqual(
      contactListReducer(undefined, { type: null })
    );
  });

  test("Check that initial state if formVisibleReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, { type: null })
    );
  });

  test("Check that ADD_CONTACT action woeks for contactListReducer and root reducer", () => {
    const action = {
      type: c.ADD_CONTACT,
      name: "aaron",
      phone: "123-456-7890",
      email: "aaron@aaron.aaron",
      id: 1,
    };
    store.dispatch(action);
    expect(store.getState().mainContactList).toEqual(
      contactListReducer(undefined, action)
    );
  });

  test("Check that TOGGLE_FORM action works for formVisibleReducer and root reducer", () => {
    const action = {
      type: c.TOGGLE_FORM,
    };
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, action)
    );
  });
});
