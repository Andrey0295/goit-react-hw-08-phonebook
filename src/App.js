import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import AppBar from './components/AppBar';
import HomeView from './views/ContactsView/HomeView';
import RegisterView from './views/ContactsView/RegisterView';
import LoginView from './views/ContactsView/LoginView';

import ContactsView from './views/ContactsView/ContactsView';

const App = () => (
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

export default App;
