import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    gettingValues = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
        }, () => {
            // console.log(this.state)
        })
    }

    signUp = (ev) => {
        ev.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    goToSignIn=()=>{
        this.props.history.push("/")
    }
    resetPassword=()=>{
        this.props.history.push("/ForgetPassword")
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="formDiv">
                    <div className="header">
                        <p>Account Signup</p>
                    </div>
                    <form className="signUpForm" onSubmit={(ev) => this.signUp(ev)}>
                        <input
                            className="smallInput"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={(ev) => this.gettingValues(ev)}
                            required
                            autoFocus
                        />
                        <input
                            className="smallInput"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={(ev) => this.gettingValues(ev)}
                            required
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(ev) => this.gettingValues(ev)}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(ev) => this.gettingValues(ev)}
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={this.state.confirmPassword}
                            onChange={(ev) => this.gettingValues(ev)}
                            required
                        />
                        <button>Sign Up</button>
                    </form>
                    <div className="forSignUp signUp">
                        <p>forget <button onClick={this.resetPassword}>Password?</button></p>
                        <p>already have an account <button onClick={this.goToSignIn}>Login</button></p>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(SignUp);