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
    apiKey: "AIzaSyAf7tkeAMNW9Pdfkf_oUibrYyD3KwzRu50",
    authDomain: "endeavor-4516f.firebaseapp.com",
    databaseURL: "https://endeavor-4516f.firebaseio.com",
    projectId: "endeavor-4516f",
    storageBucket: "endeavor-4516f.appspot.com",
    messagingSenderId: "1011619626034"
};
firebase.initializeApp(config);

// Initialize the firebase app using the config

// Render the application
ReactDOM.render(<App />, document.getElementById('root'));
