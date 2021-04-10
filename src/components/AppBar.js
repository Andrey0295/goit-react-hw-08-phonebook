import React from 'react';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu/UserMenu';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = ({ isAuthenticated }) => {
  return (
    <header style={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
