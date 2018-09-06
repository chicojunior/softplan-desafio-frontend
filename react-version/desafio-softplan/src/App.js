import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Redirect, withRouter, Switch } from 'react-router-dom';
import Test from './components/Test';
import Home from './components/Home';
class App extends Component {
  constructor(props) {
    super(props)
    let handleToUpdate = this.handleToUpdate.bind(this);
  }

  state = {
    toDashboard: false,
  }

  handleToUpdate(someArg) {
    console.log('We pass argument from Child to Parent: ' + someArg);
    this.setState({toDashboard: !someArg});
    console.log(this.setState);
  }

  render() {
    const handleToUpdate = this.handleToUpdate

    if (this.state.toDashboard === true) {
      debugger
      return <Redirect to='/test' />
    }

    return (
      <div className="App">
        <div className="container">
          <Switch>
            <Router>
              <div>
                <Route exact path="/" render={() => <Home handleToUpdate={handleToUpdate.bind(this)} />} />
                <Route path="/test" render={() => <Test name="Testing" />} />
              </div>
            </Router>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
