import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './RenderWithL';

const mockEmail = 'teste.teste@hotmail.com';

describe('Testa a pagina Profile', () => {
  it('verifica se tudo é renderizado corretamente', () => {
    const { history } = renderWithRouter(<App />);
    const inputMail = screen.getByPlaceholderText(/email/i);
    userEvent.type(inputMail, mockEmail);

    const inputSenha = screen.getByPlaceholderText(/senha/i);
    const mockSenha = '12345678';
    userEvent.type(inputSenha, mockSenha);

    const botao = screen.getByText(/Enter/i);

    userEvent.click(botao);

    const botaoProf = screen.getByText(/profile/i);
    userEvent.click(botaoProf);

    const emailValue = screen.getByText(/teste.teste/i);
    expect(emailValue).toBeInTheDocument();

    const botaoRecipes = screen.getByText(/done/i);
    expect(botaoRecipes).toBeInTheDocument();

    const botaoFav = screen.getByText(/favorite/i);
    expect(botaoFav).toBeInTheDocument();

    const botaoLogout = screen.getByText('Logout');
    expect(botaoLogout).toBeInTheDocument();

    userEvent.click(botaoRecipes);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/done-recipes');
  });

  it('verifica se clicar no botao favorite direciona para pagina correta', () => {
    const { history } = renderWithRouter(<App />);
    const inputMail = screen.getByPlaceholderText(/email/i);
    userEvent.type(inputMail, mockEmail);

    const inputSenha = screen.getByPlaceholderText(/senha/i);
    const mockSenha = '12345678';
    userEvent.type(inputSenha, mockSenha);

    const botao = screen.getByText(/Enter/i);

    userEvent.click(botao);

    const botaoProf = screen.getByText(/profile/i);
    userEvent.click(botaoProf);

    const emailValue = screen.getByText(/teste.teste/i);
    expect(emailValue).toBeInTheDocument();

    const botaoRecipes = screen.getByText('Done Recipes');
    expect(botaoRecipes).toBeInTheDocument();

    const botaoFav = screen.getByText('Favorite Recipes');
    expect(botaoFav).toBeInTheDocument();

    const botaoLogout = screen.getByText('Logout');
    expect(botaoLogout).toBeInTheDocument();

    userEvent.click(botaoFav);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorite-recipes');
  });

  it('verifica se clicar no botao de logout direciona para pagina correta', () => {
    const { history } = renderWithRouter(<App />);
    const inputMail = screen.getByPlaceholderText(/email/i);
    userEvent.type(inputMail, mockEmail);

    const inputSenha = screen.getByPlaceholderText(/senha/i);
    const mockSenha = '12345678';
    userEvent.type(inputSenha, mockSenha);

    const botao = screen.getByText(/Enter/i);

    userEvent.click(botao);

    const botaoProf = screen.getByText(/profile/i);
    userEvent.click(botaoProf);

    const emailValue = screen.getByText(/teste.teste/i);
    expect(emailValue).toBeInTheDocument();

    const botaoRecipes = screen.getByText('Done Recipes');
    expect(botaoRecipes).toBeInTheDocument();

    const botaoFav = screen.getByText('Favorite Recipes');
    expect(botaoFav).toBeInTheDocument();

    const botaoLogout = screen.getByText('Logout');
    expect(botaoLogout).toBeInTheDocument();

    userEvent.click(botaoLogout);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });
});
