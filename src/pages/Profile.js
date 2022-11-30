import React from 'react';
import Proptypes from 'prop-types';

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
    const { email } = JSON.parse(localStorage.getItem('user'));
    this.setState({
      email,
    });
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
      </div>
    );
  }
}

Profile.propTypes = {
  history: Proptypes.shape().isRequired,
};

export default Profile;
