import React from 'react';
import Proptypes from 'prop-types';
import Header from '../components/Header';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validButton = () => {
    const { email, password } = this.state;
    const validEmail = email.toLowerCase()
      .match(
        /^\S+@\S+\.\S+$/,
      );
    const minPasswordDigits = 6;
    const validPassword = password.length > minPasswordDigits;
    return validEmail && validPassword;
  };

  buttonClickStorage = () => {
    const { email } = this.state;
    const { history } = this.props;
    const emailValue = JSON.stringify({ email });
    localStorage.setItem('user', emailValue);
    history.push('/meals');
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Header />
        <input
          type="text"
          data-testid="email-input"
          placeholder="Email"
          value={ email }
          name="email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          value={ password }
          name="password"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !this.validButton() }
          onClick={ this.buttonClickStorage }
        >
          Enter

        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: Proptypes.shape().isRequired,
};

export default Login;
