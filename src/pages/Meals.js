import React from 'react';
import Proptypes from 'prop-types';

class Meals extends React.Component {
  profileButton = () => {
    const { history } = this.props;
    history.push('/profile');
  };

  render() {
    return (
      <div>
        <p>Pagina de Receitas</p>
        <button type="button" onClick={ this.profileButton }>Profile</button>
      </div>
    );
  }
}

Meals.propTypes = {
  history: Proptypes.shape().isRequired,
};

export default Meals;
