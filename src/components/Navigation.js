import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import authSelectors from '../redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#af7eeb',
  },
  activeLink: {
    color: 'rgb(103, 56, 234)',
  },
};

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
        Главная
      </NavLink>
      {isAuthenticated && (
        <NavLink
          exact
          to="/contacts"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps, null)(Navigation);
