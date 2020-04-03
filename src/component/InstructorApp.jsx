import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import MainPageComponent from "./MainPageComponent";

class InstructorApp extends Component {


    render() {
        return (
            <>
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/register" exact component={RegisterComponent} />
                            <Route path="/index" exact component={MainPageComponent}/>
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default InstructorApp