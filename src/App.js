import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import authOperations from './redux/auth/auth-operations';

import Container from './components/Container/Container';
import AppBar from './components/AppBar';
import HomeView from './views/ContactsView/HomeView';
import RegisterView from './views/ContactsView/RegisterView';
import LoginView from './views/ContactsView/LoginView';

import ContactsView from './views/ContactsView/ContactsView';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            component={RegisterView}
            redirectTo="/"
          />
          <PublicRoute
            path="/login"
            restricted
            component={LoginView}
            redirectTo="/contacts"
          />
          <PrivateRoute
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
        </Switch>
      </Container>
    );
  }
}

// const App = () => (
//   <Container>
//     <AppBar />

//     <Switch>
//       <Route exact path="/" component={HomeView} />
//       <Route path="/register" component={RegisterView} />
//       <Route path="/login" component={LoginView} />
//       <Route path="/contacts" component={ContactsView} />
//     </Switch>
//   </Container>
// );

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
