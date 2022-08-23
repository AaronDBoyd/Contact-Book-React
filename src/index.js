import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
// import reducer from "./reducers/contact-list-reducer";
// import rootReducer from "./reducers/index";
// import firestore from "./reducers/index";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./firebase";
import { firestoreReducer } from 'redux-firestore';

const store = createStore(firestoreReducer); /* con I just use firestoreReducer? */

// store.subscribe(() =>
//   console.log(store.getState())
// );

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
);
