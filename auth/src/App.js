import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { Auth } from './Auth';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Signup } from './Signup';
import { Login } from './Login';
import { ToDoList } from './ToDoList';
import { Test } from './Test';
import { SplashPage } from './SplashPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from "./textlogo.png";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loaded: false
        };

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
                    username: '',
                    loaded: false
                })
            }
            else {
                this.setState({ user: null, loaded: true });
            }
        })
    }

    handleSignOut() {
        this.setState({ errorMessage: null }); //clear old error

        /* Sign out the user, and update the state */
        firebase.auth().signOut()
            .catch((err) => {
                console.log(err)
                this.setState({ errorMessage: err.message });
            });
    }
    render() {
        // if (this.state.user && !this.state.loaded) {
        return (
            <div>
                <Router>
                    <div >
                        <div>
                            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <a class="navbar-brand" href="#">
                                    <img className="homePic" src={logo} alt="logo" />
                                </a>
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                    <ul class="navbar-nav">
                                        <li class="nav-item active">

                                            <Link to="/Splash" className="nav-link">
                                                About <span class="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Calendar</a>
                                        </li>

                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Layout
                                        </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">List View</a>
                                                <a class="dropdown-item" href="#">Card View</a>
                                            </div>
                                        </li>

                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Progress
                                        </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">Active</a>
                                                <a class="dropdown-item" href="#">Complete</a>
                                            </div>
                                        </li>

                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Advance
                                        </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">Due Date</a>
                                                <a class="dropdown-item" href="#">Per Project</a>
                                                <a class="dropdown-item" href="#">Assigned By</a>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                UW Resources
                                        </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link to='/ic' className="dropdown-item"> Instructional Center </Link>
                                                <Link to='/clue' className="dropdown-item"> Center for Learning and Undergraduate Enrichment</Link>
                                                <Link to='/private' className="dropdown-item"> Private Tutoring</Link>
                                                <Link to='/llc' className="dropdown-item"> Lanugage Learning Center</Link>
                                                <Link to='/owrc' className="dropdown-item"> Odegaard Writing and Research Center</Link>
                                            </div>
                                        </li>
                                        <form class="form-inline my-2 my-lg-0">
                                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </ul>
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item">
                                            <a class="nav-link">Setting</a>
                                        </li>
                                        <li class="navbar-item">
                                            <form className="button">
                                                <button className="btn" type="button" onClick={() => this.handleSignOut()}>
                                                    <Link to="/Login">Sign Out</Link>
                                                </button>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div>
                            <Route path="/Signup" component={Signup} />
                            <Route path="/Login" component={Login} />
                            <Route path="/ToDoList" component={ToDoList} />
                            <Route path="/Test" component={Test} />
                            <Route path="/Splash" component={SplashPage} />
                            <Route path='/ic' component={() => window.location = 'http://depts.washington.edu/ic/'} />
                            <Route path='/clue' component={() => window.location = 'http://webster.uaa.washington.edu/asp/website/get-help/clue/home/'} />
                            <Route path='/llc' component={() => window.location = 'https://depts.washington.edu/llc/'} />
                            <Route path='/private' component={() => window.location = 'https://webster.uaa.washington.edu/asp/website/get-help/private-tutoring/'} />
                            <Route path='/owrc' component={() => window.location = 'https://depts.washington.edu/owrc/'} />
                        </div>
                    </div>
                </Router>
            </div>
        );
        // }
    }
}

export default App;
