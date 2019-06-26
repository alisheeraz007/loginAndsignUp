import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './all.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './config/configKey'

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgetPassword from './components/ForgetPassword'

firebase.initializeApp(config);

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  gettingWholeData = () => {
    firebase.database().ref().child("WholeData").on('value', (snap) => {
      if (snap.val()) {
        let data = Object.values(snap.val())
        this.setState({
          data,
        })
      }
    })
  }

  componentWillMount() {
    // this.gettingWholeData()
  }

  render() {
    return (
      <div>
        <Router>
          <Route
            exact path="/"
            render={() => <SignIn
              state={this.state}
            />} />
          <Route
            path="/SignUp"
            render={() => <SignUp
              state={this.state}
            />} />
          <Route
            path="/ForgetPassword"
            render={() => <ForgetPassword
              state={this.state}
            />} />
        </Router>
      </div>
    )
  }
}

export default App;
