import React from 'react';
import { connect } from 'react-redux';

import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

import { Button } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  name: {
    fontWeight: 700,
    marginRight: 12,
    color: '#af7eeb',
  },
  button: {
    height: '2em',
    backgroundColor: '#af7eeb',
    color: 'white',
    fontWeight: 400,
  },
};

const UserMenu = ({ email, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.name}>{email}</span>
    <Button
      style={styles.button}
      variant="contained"
      color="primary"
      type="button"
      onClick={onLogout}
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authOperations.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
