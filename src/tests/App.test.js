import React from 'react';
import App from '../App';
import { renderWithRouter } from './RenderWithL';

test('Farewell, front-end', () => {
  // Este arquivo pode ser modificado ou deletado sem problemas
  renderWithRouter(<App />);
  expect(true).toBe(true);
});
