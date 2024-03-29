import React, { Component } from 'react';
import firebase from 'firebase/app';
import { withRouter } from 'react-router-dom';
import 'firebase/auth';
import 'firebase/database';

class ForgetPassword extends Component {
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

    resetPassword=(ev)=>{
        ev.preventDefault();
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(function() {
            alert("email sent")    
          })
          .catch(function(error) {
            
          });
    }

    goToSignUp = () => {
        this.props.history.push('/SignUp')
    }

    goToSignIn = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="formDiv">
                    <div className="header">
                        <p>Reset Password</p>
                    </div>
                    <form className="forgetPassword" onSubmit={(ev) => this.resetPassword(ev)}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(ev) => this.gettingValues(ev)}
                            required
                            autoFocus
                        />
                        <button>Send</button>
                    </form>
                    <div className="forSignUp">
                        <p>already have an account <button onClick={this.goToSignIn}>Login</button></p>
                        <p>create an account <button onClick={this.goToSignUp}>Signup</button></p>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(ForgetPassword);