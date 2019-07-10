import React, { Component } from "react";
import { Route,Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Home } from "../homeContainer/home";
import { Partners } from "../partnersContainer/partners";
import { Profile } from "../profileContainer/profile";
import {Login} from "../loginContainer/login";
import {Nav} from '../navContainer/nav';
import {Signup} from '../signupContainer/signup';
import {Points} from '../pointsContainer/points'
import { Redeem } from "../redeemContainer/redeem";

const DefaultContainer = () => (
  <div >
    <Nav />
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/signup" component={Signup}/>  
    <Route path="/home" component={Home} />
    <Route  path="/redeem" component={Redeem} />
    <Route path="/profile" component={Profile} />
    <Route path="/partners" component={Partners} />
  </div>
)

class AppRouter extends Component {

  render() {
    return (  
        <Router>
        <Switch>
          <Route  path="/login" component={Login}/>
          <Route  path="/signup" component={Signup}/>
          <Route  path="/logs/:id" component={Points}/>
          <Route component={DefaultContainer}/>
        </Switch>
      </Router>
    );
  }
}
export { AppRouter };
