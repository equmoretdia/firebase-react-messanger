import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import App from "./App";
import "./index.css";

export const Context = createContext(null);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSz9AKXSSn1VWrc25I3uLZ-KhROpAOgpY",
  authDomain: "chat-react-d01da.firebaseapp.com",
  projectId: "chat-react-d01da",
  storageBucket: "chat-react-d01da.appspot.com",
  messagingSenderId: "205734899323",
  appId: "1:205734899323:web:2a060c2097e2956fd03cde",
  measurementId: "G-RL7RDXT19H",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get the auth function
const auth = getAuth(firebaseApp);

// Get the firestore function
const db = getFirestore(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        firebase: firebaseApp,
        auth: auth,
        firestore: db,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
