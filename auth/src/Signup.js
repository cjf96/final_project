import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { AuthSignup } from './AuthSignup';
import { Redirect } from 'react-router-dom';


export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loaded: false
        };
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    componentDidMount() {
        this.stopWatchingAuth = firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.setState({
                    user: firebaseUser,
                    errorMessage: '',
                    email: '',
                    password: '',
                    username: '',
                    loaded: false
                })
            }
            else {
                this.setState({
                    user: null, loaded: true
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

    render() {
        // if (this.state.user && !this.state.loaded) {
        //     return <Redirect to='/' />;
        // }

        return (
            <div className="container">
                {this.state.errorMessage &&
                    <p className="alert alert-danger">
                        {this.state.errorMessage}</p>
                }

                {!this.state.user &&
                    <AuthSignup handleSignUp={this.handleSignUp} />
                }
            </div>
        );
    }
}


