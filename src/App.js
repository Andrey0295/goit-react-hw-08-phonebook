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

class App extends Component {
  componentDidCatch() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
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
  onGetCurrentUser: dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
