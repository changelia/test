import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from './components/header/header';
import Dashboard from './components/content/dashboard/dashboard'
import Leaderboard from './components/content/leaderboard/leaderboard'
import Analytics from './components/content/analytics/analytics'
import Chat from './components/content/chat/chat'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/analytics" component={Analytics} />
            <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
