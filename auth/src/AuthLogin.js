import React, { Component } from 'react';
import firebase from 'firebase';
import { Signup } from "./Signup";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./AuthSignup.css";
import logo from "./textlogo.png";

export class AuthLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: ''
        };

    }
    handleChange(event) {
        let value = event.target.value;
        let field = event.target.name;

        let change = {};
        change[field] = value;
        this.setState(change);
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
                            <h1> Log In </h1>
                        </div>

                        <div className="form-group">
                            <label>Email:</label>
                            <input className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={(event) => { this.handleChange(event) }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={(event) => { this.handleChange(event) }}
                            />
                        </div>

                        <div className='row justify-content-center'>
                            <div className="form-group">
                                <button className="btn" onClick={() =>
                                    this.props.handleSignIn(this.state.email, this.state.password)}>
                                    Sign In
                            </button>

                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className="d-inline p-2  text-black">
                            Don't Have an account? <Link to='/Signup'> Sign Up</Link>
                        </div>
                    </div>

                    <Route path="/Signup" component={Signup} />
                </div >
            </Router >
        );
    }
}