import React, { Component } from 'react';
import firebase from 'firebase';
import './ToDoList.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Link } from "react-router-dom";


export class ToDoList extends Component {


    render() {

        return (
            <Router>
                <div>
                    <div className="container">
                        <nav class="navbar navbar-light bg-light">
                            <a class="navbar-brand" href="#">Navbar</a>
                        </nav>
                    </div >
                </div>
            </Router >
        );
    }
}


