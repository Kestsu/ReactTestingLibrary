import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../components/renderWithRouter';

describe('4. Teste o componente <NotFound.js />', () => {
  test(
    'Teste se a página contém um heading h2 com o texto Page requested not found 😭',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/naoexiste');
      const notFoundText = screen.getByText(
        /Page requested not found/i,
        { level: 2 },
      );
      expect(notFoundText).toBeInTheDocument();
    },
  );
  test('Teste se a página mostra a imagem', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/naoexiste');
    const image = screen.getAllByRole('img');
    expect(image[1]).toHaveProperty('src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
