import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { AuthLogin } from './AuthLogin';
import { Redirect } from 'react-router-dom';


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loaded: false
        };
        this.handleSignIn = this.handleSignIn.bind(this);
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


    handleSignIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(err => {
                this.setState({ errorMessage: err.message })
            })
    }

    render() {
        if (this.state.user && !this.state.loaded) {
            return <Redirect to='/' />;
        }

        return (
            <div className="container">
                {this.state.errorMessage &&
                    <p className="alert alert-danger">
                        {this.state.errorMessage}</p>
                }

                {this.state.user &&
                    <div className="alert alert-success"><h1>You signed up
                        {this.state.user.displayName}</h1></div>
                }

                {!this.state.user &&
                    <AuthLogin handleSignIn={this.handleSignIn} />
                }


            </div>
        );
    }
}
