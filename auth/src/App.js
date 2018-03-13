import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { Auth } from './Auth';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Signup } from './Signup';
import { Login } from './Login';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
    // Add a handleSignOut() method
    // firebase.auth hold the object.
    handleSignOut() {
        firebase.auth().signOut()
    }
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="container">
                        <div className='nav justify-content-end'>
                            <li class="nav-item"><Link to="/Signup">Signup</Link></li>
                            <li class="nav-item"> <Link to="/Login">Login</Link> </li>
                            <Route path="/Signup" component={Signup} />
                            <Route path="/Login" component={Login} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;