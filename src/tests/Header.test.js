import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';

import { renderWithRouterAndRedux } from './helpers/RenderWith';

describe('Testes do componente Header', () => {
  it('verifica se os elementos estão na tela', () => {
    renderWithRouterAndRedux(<Header pages isSearch>Teste</Header>);
    const profileIcon = screen.getByTestId('profile-top-btn');
    const searchIcon = screen.getByTestId('search-top-btn');
    const title = screen.getByTestId('page-title');
    expect(profileIcon).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    expect(title).toHaveTextContent('Teste');
  });
  it('verifica se ao clicar no search aparece o input para busca', () => {
    renderWithRouterAndRedux(<Header pages isSearch>Teste</Header>);
    const searchIcon = screen.getByTestId('search-top-btn');
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
});
