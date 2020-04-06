import React, {Component} from 'react'
import AuthenticationService from '../service/AuthenticationService';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        AuthenticationService
            .executeJwtLogin(this.state.login, this.state.password)
            .then((response) => {
                console.log(response.data);
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.login, response.data.tokenValue)
                this.props.history.push(`/profile`)
            }).catch(() => {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        })

    }

    render() {
        return (
            <div>
                <nav id="navigation">
                    <div className="container">
                        <div id="responsive-nav">
                            <ul className="main-nav nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Популярные</a></li>
                                <li><a href="#">Категории</a></li>
                                <li><a href="#">бтыавбыт</a></li>
                                <li><a href="#">ыаываыа</a></li>
                                <li><a href="#">отыоплs</a></li>
                                <li><a href="#">Aлвылатоы</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="section">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-7">
                                <div className="billing-details">
                                    <div className="section-title">
                                        <h3 className="title">Вход</h3>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="email" name="login" placeholder="Login"
                                               value={this.state.login} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input className="input" type="password" name="password" placeholder="Password"
                                               value={this.state.password} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <button href="#" className="primary-btn order-submit"
                                        onClick={this.loginClicked}>Войти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent