import formVisibleReducer from './form-visible-reducer';
import contactListReducer from './contact-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainContactList: contactListReducer
});

export default rootReducer;