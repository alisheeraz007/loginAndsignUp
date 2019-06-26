import React, { Component } from 'react';
import firebase from 'firebase/app';
import { withRouter } from 'react-router-dom';
import 'firebase/auth';
import 'firebase/database';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    gettingValues = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
        }, () => {
            // console.log(this.state)
        })
    }

    signIn = (ev) => {
        ev.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                alert("loggedIn")
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }

    goToSignUp=()=>{
        this.props.history.push('/SignUp')
    }
    resetPassword=()=>{
        this.props.history.push('/ForgetPassword')
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="formDiv">
                    <div className="header">
                        <p>Account Login</p>
                    </div>
                    <form onSubmit={(ev) => this.signIn(ev)}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(ev) => this.gettingValues(ev)}
                            required
                            autoFocus
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(ev) => this.gettingValues(ev)}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <div className="forSignUp">
                        <p>forget <button onClick={this.resetPassword}>Password?</button></p>
                        <p>create an account <button onClick={this.goToSignUp}>Signup</button></p>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(SignIn);