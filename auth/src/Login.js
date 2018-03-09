import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { AuthLogin } from './AuthLogin';


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleSignIn = this.handleSignIn.bind(this);
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


    handleSignIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(err => {
                this.setState({ errorMessage: err.message })
            })
    }
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
                    <div className="alert alert-success"><h1>You signed up
                        {this.state.user.displayName}</h1></div>
                }

                {!this.state.user &&
                    <AuthLogin handleSignIn={this.handleSignIn} />
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
