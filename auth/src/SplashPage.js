import React, { Component } from "react";
import firebase from "firebase";
import logo from "./textlogo.png";
import "./SplashPage.css";
import { HashLink as Link } from 'react-router-hash-link';

export class SplashPage extends Component {
    render() {
        return (
            <body>
                <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content"
                        aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand" href="#"><i className="fa fa-home" aria-label="Home Symbol"></i></a>

                    <div className="collapse navbar-collapse" id="nav-content">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" smooth to="Splash#about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" smooth to="Splash#team">Team</Link>
                            </li>
                            { // There is no contact info on this page to link to
                        /* <li className="nav-item">
                        <Link className="nav-link" smooth to="Splash#contact">Contact</Link>
                        </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Signup">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div id="wrapper">
                    <header>
                        <img className="d-block img-fluid" id="logo" src={logo} alt="logo" />
                        {/* <!-- Provides the user essential informations they need to know before they embark on their journey. -->
                        <!-- jumbotron-fluid gets rid of radius and side-paddings. --> */}
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <section id="about" className="about"></section>
                                <h1 className="display-3 "><b>About Endeavour</b></h1>
                                <h2 className="type">Our website application allows you to create, organize,track your tasks.</h2>
                                {/* <!-- Breaks up the space, easier to read due to division --> */}
                                <hr className="my-4" />
                                <p className="lead">
                                    We all live busy lives, thus it's important to always be on top of our meetings, things-to-do, and chores.
                                    This is where Endeavour comes into play. Through our app you can have a secure task manager just by logging
                                    in to your account and start building up the things that needs to be done. We thrive for simplicity and minimalistic interfaces
                                    so you don't get entangled into several functions and options that one rarely utilizes. Our calendar feature also allows you to
                                    have an instant acces of the tasks you archived or the ones that are coming up in the next weeks.
                                    You have a flight scheduled? No problem, we got it! Now, scroll down to find out more about what we strive for!
                                </p>
                                <Link to="/Signup">Sign Up!</Link>
                                <p id="space"> | </p>
                                <Link to="/Login">Log In!</Link>
                            </div>
                        </div>
                    </header>

                    <main>
                        <noscript>
                            {/* <!-- You need to enable JavaScript to run this app. --> */}
                        </noscript>
                        <br />
                        <div id="root" alt="voting and sign up page"></div>
                        <br />

                        {/*This HTML file is a template.
                        If you open it directly in the browser, you will see an empty page.
                        You can add webfonts, meta tags, or analytics to this file.
                        The build step will place the bundled scripts into the <body> tag.
                        To begin the development, run `npm start` or `yarn start`.
                        To create a production bundle, use `npm run build` or `yarn build`.*/}

                        {/*Creates cards to properly read information about each of the categories and creates a user-friendly environment */}
                        <div className="cards">
                            <div className="container-card">
                                <div className="section-title">
                                    <br />
                                    {/* <!-- Emphasis on the titles. --> */}
                                    <h2 className="font-weight-bold" >Sign Up and Manage your Schedule!</h2>
                                    <p>
                                        Find out the features that we provide within our Endeavour application. Making life easier to navigate is our promise to you.
                                    </p>
                                    <br />
                                </div>
                            </div>
                            {/* <!-- Feature 1 --> */}
                            <div className="row">
                                <div className="card" id="ftr-1">
                                    <div className="containerimage">
                                        <img className="icon" src="http://www.ieikuwait.org/images/login-icon.png" alt="Key and a lock to illustrate login" />
                                    </div>
                                    <div className="card-content">
                                        <h4><b>Secure Connection</b></h4>
                                        <hr className="my-3" />
                                        <p>
                                            We are working with sophisticated servers that keeps your information safe.
                                            Easy to sign up and sign in into our application.
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Feature 2 --> */}
                                <div className="card" id="ftr-2">
                                    <div className="containerimage">
                                        <img className="icon" src="https://lh3.googleusercontent.com/JI03c8U3TElg-SP9FbTPtIjEzNafWyLSxy89HmFrTE8_-oEbe0C_kuKbG8yDKQUoCqE=w300" alt="To do list icon to illustrate tasks" />
                                    </div>
                                    <div className="card-content">
                                        <h4><b>Add and Update Tasks</b></h4>
                                        <hr className="my-3" />
                                        <p>
                                            Add your daily tasks and keep track of them throughout the week. Once you completed a task feel free to
                                            remove it from the menu.
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- Feature 3 --> */}
                                <div className="card" id="ftr-3">
                                    <div className="containerimage2">
                                        <img className="icon" src="https://png.icons8.com/color/260/calendar-1.png" alt="Icon of a calendar" />
                                    </div>
                                    <div className="card-content">
                                        <h4><b>Calendar Feature</b></h4>
                                        <hr className="my-3" />
                                        <p>
                                            Get an in-depth view of your busy schedule. With the Calendar you can see archived tasks that you already completed.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="container-card">
                                <br />
                                <hr className="my-3" />
                                <div className="section-title">
                                    {/* <!-- Emphasis on the titles. --> */}
                                    <section id="team" className="team" ></section>
                                    <h2 className="font-weight-bold">Endeavour Team</h2>
                                    <p>
                                        Meet the team of developers and designers who are updating Endeavour based out of Seattle, WA.
                                        Our motive is to solve to problems for people by providing them with applications they can use in their daily lives.
                                        Please feel free to reach out to us if you have any questions about our app.
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Row of profile cards --> */}
                            <div className="row">
                                <div className="card">
                                    <img className="card-img-top" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/17098457_1232798613494088_1509029848289946794_n.jpg?oh=c9339a52111f789eb71159beacb1d70d&oe=5B066B19" alt="Picture of Cole French" />
                                    <div className="card-body">
                                        <h4 className="card-title"><b>Cole French</b></h4>
                                        <hr className="my-3" />
                                        <p>Back–End Developer</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/16143275_426357944369720_590317244828834168_n.jpg?oh=256898bc7012495a6beab7a1505a823d&oe=5B32E59D" alt="Picture of Phillip Park" />
                                    <div className="card-body">
                                        <h4 className="card-title"><b>Phillip Park</b></h4>
                                        <hr className="my-3" />
                                        <p>Back–End Developer</p>
                                    </div>
                                </div>

                                <div className="card">
                                    <img className="card-img-top" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/24862511_1802187436489505_4784991892378928939_n.jpg?oh=159fce6f559ec958b5e97c87da7fa0bc&oe=5B4B9066" alt="Picture of Mano Barkovics" />
                                    <div className="card-body">
                                        <h4 className="card-title"><b>Mano Barkovics</b></h4>
                                        <hr className="my-3" />
                                        <p>Front-End Developer</p>
                                    </div>
                                </div>

                                <div className="card">
                                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/28685260_924781977671959_8457614327328437036_n.jpg?oh=b81baf178512fb18fc340c446c4e10de&oe=5B02F257" alt="Picture of Jessie Kim" />
                                    <div className="card-body">
                                        <h4 className="card-title"><b>Jessie Kim</b></h4>
                                        <hr className="my-3" />
                                        <p>Front-End Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer>
                        <div className="footer">
                            {/* <!-- Allows text to be overlayed upon the background image, and set coordinates on where the text should appear. --> */}
                            <div id="center" className="centered">
                                <p>Crafted with care by: Mano Barkovics, Cole French, Jessie Kim, and Phillip Park</p>
                                <p>INFO 343 - Final Group Project</p>
                                <p>
                                    Only for educational purposes.
                            </p>
                                <p>
                                    Copyright © 2018, All Rights Reserved, Endeavour LLC
                            </p>
                            </div>
                            {/* <!-- Implementing Font Awesome by creating a LinkedIn icon and link to my page. --> */}
                            <div className="right">
                            </div>
                        </div>
                    </footer>
                </div>
            </body >
        );
    }
}