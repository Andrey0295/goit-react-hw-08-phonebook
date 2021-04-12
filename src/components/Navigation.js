import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#af7eeb',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
        Главная
      </NavLink>
      <NavLink
        exact
        to="/contacts"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Контакты
      </NavLink>
    </nav>
  );
};

export default Navigation;
