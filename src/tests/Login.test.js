import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './RenderWithL';

describe('Testa a pagina de Login =3', () => {
  it('Testa se tudo esta renderizado corretamente', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByPlaceholderText('Email');
    expect(inputEmail).toBeInTheDocument();

    const inputSenha = screen.getByPlaceholderText('Senha');
    expect(inputSenha).toBeInTheDocument();

    const buttonEnter = screen.getByText(/Enter/i);
    expect(buttonEnter).toBeInTheDocument();
  });

  it('Verifica se todas as interatividades estão funcionando normalemnte', () => {
    const { history } = renderWithRouter(<App />);
    const buttonEnter = screen.getByText(/Enter/i);
    expect(buttonEnter.disabled).toBe(true);

    const inputEmail = screen.getByPlaceholderText('Email');
    userEvent.type(inputEmail, 'teste.teste@hotmail.com');

    const inputSenha = screen.getByPlaceholderText('Senha');
    userEvent.type(inputSenha, '1234567');

    userEvent.click(buttonEnter);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/meals');
  });
});
