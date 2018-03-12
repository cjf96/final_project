import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Import additional libraries/styles
// Adds bootstrap library and makes it look nice
import firebase from'firebase/app';
import 'bootstrap/dist/css/bootstrap.css';


// Defines configuration for Firebase
let config = {
    apiKey: "AIzaSyDWbBlD2C3tn686FKlc895FW9U6rIA3Z8Y",
    authDomain: "project-4-ebcc0.firebaseapp.com",
    databaseURL: "https://project-4-ebcc0.firebaseio.com",
    projectId: "project-4-ebcc0",
    storageBucket: "",
    messagingSenderId: "394416342087"
  };
  
  firebase.initializeApp(config);

// Initialize the firebase app using the config

// Render the application
ReactDOM.render(<App />, document.getElementById('root'));
