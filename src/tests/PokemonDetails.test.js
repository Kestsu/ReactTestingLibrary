import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../components/renderWithRouter';

describe('7. Teste o componente <PokemonDetails.js />', () => {
  test('Teste se as informações detalhadas são mostradas na tela:', () => {
    renderWithRouter(<App />);
    const botao = screen.getByText(/More details/i);
    userEvent.click(botao);

    const titulo = screen.getByText(/Pikachu Details/i);
    expect(titulo).toBeInTheDocument();

    const heading = screen.getByRole('heading', { name: /Summary/i, level: 2 });
    expect(heading).toBeInTheDocument();

    const detalhes = screen.getByText(
      /This intelligent Pokémon roasts hard berries with electricity/i,
    );
    expect(detalhes).toBeInTheDocument();
  });
  test('Teste se existe mapas contendo as localizações do pokémon', () => {
    renderWithRouter(<App />);
    const botao = screen.getByText(/More details/i);
    userEvent.click(botao);

    const heading = screen.getByRole(
      'heading', {
        name: /Game Locations of Pikachu/i, level: 2,
      },
    );
    expect(heading).toBeInTheDocument();

    const mapaUm = screen.getByText(/Kanto Viridian Forest/i);
    const mapaDois = screen.getByText(/Kanto Power Plant/i);
    expect(mapaUm).toBeInTheDocument();
    expect(mapaDois).toBeInTheDocument();

    const image = screen.getAllByRole('img');
    expect(image[1]).toHaveProperty(
      'src',
      'https://pwo-wiki.info/images/4/47/Viridian_Forest.gif',
    //   'alt',
    //   'Pikachu location',
    );
    expect(image[2]).toHaveProperty(
      'src',
      'https://pwo-wiki.info/images/5/5b/Pp.gif',
    //   'alt',
    //   'Pikachu location',
    );
  });
  test('Teste se pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    const botao = screen.getByText(/More details/i);
    userEvent.click(botao);

    const check = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    expect(check).toBeInTheDocument();
  });
});
