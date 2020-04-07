import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import MainPageComponent from "./MainPageComponent";
import ProductComponent from "./ProductComponent";
import ProfileComponent from "./ProfileComponent";
import NoMatch from "./NoMatch";

class InstructorApp extends Component {


    render() {
        return (
            <>
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={MainPageComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/register" exact component={RegisterComponent} />
                            <Route path="/index" exact component={MainPageComponent}/>
                            <Route path="/product" exact component={ProductComponent}/>
                            <Route path="/profile" exact component={ProfileComponent}/>
                            <Route component={NoMatch} />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default InstructorApp