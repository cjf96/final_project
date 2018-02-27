import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import additional libraries/styles
// Adds bootstrap library and makes it look nice
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.css';


// Define your configuration for Firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD7y6JWVwvNdw_rutCAch4DN_VTWHVXjzY",
    authDomain: "uw-endeavour.firebaseapp.com",
    databaseURL: "https://uw-endeavour.firebaseio.com",
    projectId: "uw-endeavour",
    storageBucket: "uw-endeavour.appspot.com",
    messagingSenderId: "170411021679"
};
firebase.initializeApp(config);

// Initialize the firebase app using the config

// Render the application
ReactDOM.render(<App />, document.getElementById('root'));
