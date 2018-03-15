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
    apiKey: "AIzaSyAA15_5OjR0rfxNMM4a6ASP6OGcjlhPOEU",
    authDomain: "final-project-f37f6.firebaseapp.com",
    databaseURL: "https://final-project-f37f6.firebaseio.com",
    projectId: "final-project-f37f6",
    storageBucket: "final-project-f37f6.appspot.com",
    messagingSenderId: "78288982822"
};
firebase.initializeApp(config);

// Initialize the firebase app using the config

// Render the application
ReactDOM.render(<App />, document.getElementById('root'));
