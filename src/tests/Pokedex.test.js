import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../components/renderWithRouter';

describe('5. Teste o componente <Pokedex.js />', () => {
  test('Teste se contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const titulo = screen.getByRole(
      'heading', {
        name: /Encountered pokémons/i, level: 2,
      },
    );
    expect(titulo).toBeInTheDocument();
  });
  test('Teste se é exibido o próximo pokémon da lista quando o botão é clicado', () => {
    renderWithRouter(<App />);
    const botao = screen.getByTestId('next-pokemon');
    expect(botao).toBeInTheDocument();
    userEvent.click(botao);
    const charmander = screen.getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();
    userEvent.click(botao);
    const caterpie = screen.getByText(/caterpie/i);
    expect(caterpie).toBeInTheDocument();
    userEvent.click(botao);
    const ekans = screen.getByText(/Ekans/i);
    expect(ekans).toBeInTheDocument();
    userEvent.click(botao);
    const alakazam = screen.getByText(/Alakazam/i);
    expect(alakazam).toBeInTheDocument();
    userEvent.click(botao);
    const mew = screen.getByText(/mew/i);
    expect(mew).toBeInTheDocument();
    userEvent.click(botao);
    const rapidash = screen.getByText(/Rapidash/i);
    expect(rapidash).toBeInTheDocument();
    userEvent.click(botao);
    const snorlax = screen.getByText(/Snorlax/i);
    expect(snorlax).toBeInTheDocument();
    userEvent.click(botao);
    const dragon = screen.getByText(/Dragonair/i);
    expect(dragon).toBeInTheDocument();
    userEvent.click(botao);
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
  //     test('Teste se é mostrado apenas um pokémon por vez', () => {
  // renderWithRouter(<App />);

  //     });
  test('Teste se a Pokédex tem os botões de filtro:', () => {
    renderWithRouter(<App />);
    const all = screen.getByRole('button', { name: /All/i });
    const electric = screen.getByRole('button', { name: /Electric/i });
    const fire = screen.getByRole('button', { name: /Fire/i });
    const bug = screen.getByRole('button', { name: /Bug/i });
    const poison = screen.getByRole('button', { name: /Poison/i });
    const psychic = screen.getByRole('button', { name: /Psychic/i });
    const normal = screen.getByRole('button', { name: /Normal/i });
    const dragon = screen.getByRole('button', { name: /Dragon/i });
    expect(all).toBeInTheDocument();
    expect(electric).toBeInTheDocument();
    expect(fire).toBeInTheDocument();
    expect(bug).toBeInTheDocument();
    expect(poison).toBeInTheDocument();
    expect(psychic).toBeInTheDocument();
    expect(normal).toBeInTheDocument();
    expect(dragon).toBeInTheDocument();
  });
//   test('', () => {});
//   test('', () => {});
});
