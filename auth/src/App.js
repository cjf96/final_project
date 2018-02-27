import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { Auth } from './Auth';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }
    componentDidMount() {
        this.stopWatchingAuth = firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.setState({
                    user: firebaseUser,
                    errorMessage: '',
                    email: '',
                    password: '',
                    username: ''
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
        })
    }

    handleSignUp(email, password, username) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(firebaseUser => {
                return firebaseUser.updateProfile({
                    displayName: this.state.username
                })
            })
            .then(firebaseUser => {
                this.setState({ user: firebase.auth().currentUser })
            })
            .catch(err => {
                this.setState({ errorMessage: err.message })
            })
    }

    // Add a handleSignIn() method
    // We are storing elements in .this such as the email and password
    // This will remember all the users and able to sign in with their existing accounts.
    // .catch catches any error that might occour. Such as password might be invalid.
    // or 'The email address is already in use by another account.'
    handleSignIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(err => {
                this.setState({ errorMessage: err.message })
            })
    }

    // Add a handleSignOut() method
    // firebase.auth hold the object.
    handleSignOut() {
        firebase.auth().signOut()
    }


    render() {
        return (
            <div className="container">
                {this.state.errorMessage &&
                    <p className="alert alert-danger">
                        {this.state.errorMessage}</p>
                }

                {this.state.user &&
                    <div className="alert alert-success"><h1>Logged in as
                        {this.state.user.displayName}</h1></div>
                }

                {!this.state.user &&
                    <Auth handleSignIn={this.handleSignIn} handleSignUp={this.handleSignUp} />
                }

                {this.state.user &&
                    <button className="btn btn-warning mr-2"
                        onClick={() => this.handleSignOut()}>
                        Sign Out
                    </button>
                }
            </div>
        );
    }
}

export default App;