import React, { Component } from 'react';
import firebase from 'firebase';
import { Login } from "./Login";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./AuthSignup.css";
import logo from "./textlogo.png";

class AuthSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            open: false,
            user: null,
            loaded: false
        };
    }
    handleSignUp(email, password, username) {
        /* Create a new user and save their information */
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(firebaseUser => {
                console.log('set username', username)
                //include information (for app-level content)
                let profilePromise = firebaseUser.updateProfile({
                    displayName: username,
                }); //return promise for chaining
                return profilePromise;
            })
            .then(firebaseUser => {
                console.log('handle sign up', firebase.auth().currentUser, this)
                this.setState({
                    user: firebase.auth().currentUser
                })
            })
            .catch((err) => {
                console.log(err);
                this.setState({ errorMessage: err.message })
            })
    }

    handleChange(event) {
        let value = event.target.value;
        let field = event.target.name;
        let changes = {}; //object to hold changes
        changes[field] = value; //change this field
        this.setState(changes); //update state
    }

    render() {
        return (
            <Router>
                <div>
                    <header className="jumbotron jumbotron-fluid">
                        <div class="container">
                            <img src={logo} alt="logo" />
                        </div>
                    </header>

                    <div className="container">
                        <div className="title">
                            <h1> Sign Up </h1>
                        </div>

                        <div className="form-group">
                            <label for="inputEmail1">Email:</label>
                            <input type="email"
                                className="form-control"
                                id="onputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                name="email"
                                value={this.state.email}
                                onChange={(event) => { this.handleChange(event) }}
                            />
                        </div>

                        <div className="form-group">
                            <label for="inputPassword1">Password:</label>
                            <input type="password"
                                id="inputPassword1"
                                placeholder="Password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={(event) => { this.handleChange(event) }}
                            />
                        </div>

                        <div className="form-group">
                            <label for="inputUsername">Username:</label>
                            <input className="form-control"
                                name="username"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={(event) => { this.handleChange(event) }}
                            />
                        </div>


                        <div className='row justify-content-center'>
                            <div className="form-group">
                                <button type='button' className="btn" onClick={() => this.handleSignUp(this.state.email, this.state.password, this.state.username)}>
                                    Sign Up
                     </button>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className="d-inline p-2  text-black">
                            Have an account? <Link to='/Login'> Log In </Link>
                        </div>
                    </div>
                    <div>
                        <Route path="/Login" component={Login} />
                    </div>
                </div>
            </Router >
        );
    }
}

export { AuthSignup };
