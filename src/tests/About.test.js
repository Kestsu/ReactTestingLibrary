import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../components/renderWithRouter';

describe('2. Teste o componente <About.js />.', () => {
  test('se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const head = screen.getByRole('heading', {
      name: /About Pokédex/i,
      level: 2,
    });
    expect(head).toBeInTheDocument();
  });
  test('se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const paragrafo1 = screen.getByText(
      /This application simulates a Pokédex/i,
    );
    const paragrafo2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(paragrafo1).toBeInTheDocument();
    expect(paragrafo2).toBeInTheDocument();
  });
  test('se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const imagem = screen.getByRole('img');
    expect(imagem).toHaveProperty(
      'src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
