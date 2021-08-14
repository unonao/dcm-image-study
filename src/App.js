import "./App.css"

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { FilterablePracticeMenuTable } from "./components/practice/PracticeMenu"
import Lecture from "./components/lecture/Lecture";
import { LectureMenu } from "./components/lecture/LectureMenu";
import Practice from "./components/practice/Practice";

// cornerstone tools
import initCornerstone from './initCornerstone.js';
import { AuthProvider } from './auth/AuthContext';
import Login from "./auth/Login";
import { SubAuth } from "./auth/userAuth";
import PrivateRoute from "./auth/PrivateRoute";

// cornerstone tools の初期化
initCornerstone();

/**
*
*
* @param {*} props
* @returns
*/

function AppRouter() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/practice/" component={''} />
          <Route path="/login/" component={''} />
          <Route path="/newlogin/" component={''} />
          <Route component={Header} />
        </Switch>

        <Switch>
          <AuthProvider>
            <Route exact path="/" component={Home} />
            <Route exact path="/login/" component={Login} />
            <Route exact path="/newlogin/" component={SubAuth} />
            <PrivateRoute exact path="/lecture" render={LectureMenu} />
            <PrivateRoute exact path="/lecture/:sitekind" render={Lecture} />
            <PrivateRoute exact path="/practice_menu/" component={FilterablePracticeMenuTable} />
            <PrivateRoute exact path="/practice/:practiceId" render={Practice} />
          </AuthProvider>
        </Switch>

        <Switch>
          <Route path="/practice/" component={''} />
          <Route path="/login/" component={''} />
          <Route path="/newlogin/" component={''} />
          <Route component={Footer} />
        </Switch>
      </Router>
    </div>
  );
}

export default class App extends Component {
  render() {
    return <AppRouter />;
  }
}
