import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';

class RegisterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phone: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.registerClicked = this.registerClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    registerClicked() {
        AuthenticationService
            .executeJwtRegister(
                this.state.login,
                this.state.password,
                this.state.firstName,
                this.state.lastName,
                this.state.address,
                this.state.phone)
            .then((response) => {
                console.log(response.data);
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.login, response.data.value)
                this.props.history.push(`/login`)
            }).catch(() => {}
        )

    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <div className="container">

                    Login: <input type="text" name="login" value={this.state.login} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    First Name: <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    Last Name: <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    Address: <input type="text" name="address" value={this.state.address} onChange={this.handleChange}/>
                    Phone: <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/>

                    <button className="btn btn-success">Register</button>
                </div>
            </div>
        )
    }
}

export default RegisterComponent