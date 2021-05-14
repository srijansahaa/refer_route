import React, { useState } from 'react';
import landingImg from '../assets/landing.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import WallProfile from './WallProfile';

function Homepage() {


    return (
        <Router>
            
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/WallProfile" component={WallProfile}/>
            </Switch>
        </Router>
    )
}

function Home() {
    const [section, setSection] = useState("Main");
    return (
        <div className="mainWrapper d-flex">
                <div className="landingLeft">
                    <img id="landingImg" src={landingImg}/>
                </div>
                <div className="landingRight">
                    {
                        section=="SignUp" ? 
                        <div className="signUp">
                            <h1>ReferRoute</h1>
                                <form className="d-flex flex-column align-items-center">
                                <input type="text" placeholder="Name" className="inputBoxes"/>
                                <div className="d-flex flex-column flex-sm-row" style={{    width: "-webkit-fill-available"}}>
                                    <input type="text" placeholder="Contact No." className="inputBoxes" style={{marginRight: "10px"}}/>
                                    <input type="email" placeholder="Email ID" className="inputBoxes" style={{marginLeft: "10px"}}/>
                                </div>
                                <div className="d-flex flex-column flex-sm-row" style={{    width: "-webkit-fill-available"}}>
                                    <input type="password" placeholder="Password" className="inputBoxes" style={{marginRight: "10px"}}/>
                                    <input type="password" placeholder="Confirm Password" className="inputBoxes" style={{marginLeft: "10px"}}/>
                                </div>
                                <div>
                                    <input type="checkbox" style={{marginRight: "22px", marginLeft: "4px"}}/>
                                    <label>Show Password</label>
                                </div>
                                <button id="login" onClick={() => setSection("Login")}>Sign Up</button>
                            </form>
                        </div> : 
                        section == "Login" ? 
                        <div className="login">
                            <h1>ReferRoute</h1>
                            <form className="d-flex flex-column align-items-center">
                                <input type="text" placeholder="Username" className="inputBoxes"/>
                                <input type="password" placeholder="Password" className="inputBoxes"/>
                                <div>
                                    <input type="checkbox" style={{marginRight: "22px", marginLeft: "4px"}}/>
                                    <label>Keep me logged in</label>
                                </div>
                                <Link to="/WallProfile" ><button id="login">Login</button></Link>
                            </form>
                        </div> :
                        <div className="main">
                            <h1>ReferRoute</h1>
                            <div id="buttonWrapper">
                                <button id="login" onClick={() => setSection("Login")}>Login</button>
                                <button id="signUp" onClick={() => setSection("SignUp")}>Sign Up</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
    )
}

export default Homepage;