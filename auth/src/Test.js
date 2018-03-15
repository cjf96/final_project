/*import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { Auth } from './Auth';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Signup } from './Signup';
import { Login } from './Login';
import { ToDoList } from './ToDoList';
import { Test } from './Test';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from "./textlogo.png";


class App extends Component {

    render() {
        return (
            <Router>
                <div >
                    <div>
                        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <a class="navbar-brand" href="#">
                                <img src={logo} alt="logo" />
                            </a>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Calendar</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            UW Resources
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
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
                                        <a class="nav-link">Log Out</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="sideNav">
                            <ul class="nav flex-column">
                                <p>Layout</p>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">List View</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Grid View</a>
                                </li>
                                <p>Progress</p>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Active</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Complete</a>
                                </li>
                                <p>Advance</p>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Due Date</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Per Project</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Assigned By</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Route path="/Signup" component={Signup} />
                        <Route path="/Login" component={Login} />
                        <Route path="/ToDoList" component={ToDoList} />
                        <Route path="/Test" component={Test} />
                    </div>
                </div>

            </Router>
        );
    }
}

export default App;*/
