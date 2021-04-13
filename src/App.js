import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import Container from './components/Container/Container';
import AppBar from './components/AppBar';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() =>
  import('./views/ContactsView/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import(
    './views/ContactsView/RegisterView' /* webpackChunkName: "register-view" */
  ),
);

const LoginView = lazy(() =>
  import('./views/ContactsView/LoginView' /* webpackChunkName: "login-view" */),
);

const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
  ),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<p>Загружаем...</p>}>
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
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
