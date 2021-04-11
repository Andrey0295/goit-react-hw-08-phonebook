import React from 'react';
import { connect } from 'react-redux';

import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ email, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.name}>{email}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authOperations.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
