import React from 'react';
import Proptypes from 'prop-types';
import Footer from './Footer';
import Header from '../components/Header';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'teste',
    };
  }

  componentDidMount() {
    this.requestLocalStorage();
  }

  requestLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const { email } = user;
      this.setState({
        email,
      });
    }
  };

  buttonDoneRecipes = () => {
    const { history } = this.props;
    history.push('/done-recipes');
  };

  buttonFavorites = () => {
    const { history } = this.props;
    history.push('/favorite-recipes');
  };

  buttonLogout = () => {
    const { history } = this.props;
    localStorage.clear();
    history.push('/');
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <Header pages isSearch={ false }>
          <h1>Profile</h1>
        </Header>
        <p data-testid="profile-email">{email}</p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ this.buttonDoneRecipes }
        >
          Done Recipes

        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ this.buttonFavorites }
        >
          Favorite Recipes

        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ this.buttonLogout }
        >
          Logout

        </button>
        <Footer />
      </div>
    );
  }
}

Profile.propTypes = {
  history: Proptypes.shape().isRequired,
};

export default Profile;
