import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import contactListReducer from '../../reducers/contact-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainContactList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of contactListReducer matches root reducer', () => {
    expect(store.getState().mainContactList).toEqual(contactListReducer(undefined, {type: null}) )
  })

  test('Check that initial state if formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }))
  })
});