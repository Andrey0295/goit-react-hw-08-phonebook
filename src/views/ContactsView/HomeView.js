import React from 'react';

const styles = {
  homeStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#6738EA',
  },
};

const HomeView = () => {
  return (
    <div style={styles.homeStyles}>
      <h1 style={styles.title}>Домашняя страница</h1>
    </div>
  );
};

export default HomeView;
