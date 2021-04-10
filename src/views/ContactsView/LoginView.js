import React, { Component } from 'react';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <div>
        <h1>Страница логина</h1>
        <form style={styles.form} onSubmit={this.handleSubmit}>
          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

export default LoginView;
