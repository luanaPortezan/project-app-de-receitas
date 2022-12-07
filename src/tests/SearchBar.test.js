import React from 'react';
// import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from './RenderWithL';

describe('Testa a pagina de Login =3', () => {
  it('Testa se tudo esta renderizado corretamente', () => {
    renderWithRouter(<App />);
  });
});
