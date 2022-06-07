import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pokedex from '../pages/Pokedex';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

const isPokemonFavoriteById = {
  4: false,
  10: false,
  23: false,
  25: false,
  65: false,
  78: false,
  143: false,
  148: false,
  151: false,
};

describe('5. Teste o componente <Pokedex.js />', () => {
  test('Teste se contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ isPokemonFavoriteById }
    />);
    const titulo = screen.getByRole(
      'heading', {
        name: /Encountered pokémons/i, level: 2,
      },
    );
    expect(titulo).toBeInTheDocument();
  });
  test('Teste se é exibido o próximo pokémon da lista quando o botão é clicado', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ isPokemonFavoriteById }
    />);
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
  test('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ isPokemonFavoriteById }
    />);
    const imagens = screen.getAllByRole('img');
    expect(imagens.length).toBe(1);
  });
  test('Teste se a Pokédex tem os botões de filtro:', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ isPokemonFavoriteById }
    />);
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

    const allBtn = screen.getAllByTestId('pokemon-type-button');
    const sete = 7;
    expect(allBtn.length).toBe(sete);

    userEvent.click(bug);
    const next = screen.getByText(/Próximo pokémon/i);
    expect(next).toHaveProperty('disabled');
    const a = screen.queryByRole('button', { name: /All/i });
    expect(a).not.toHaveProperty('disabled', 'false');
  });
  test('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
    const { history } = renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ isPokemonFavoriteById }
    />);
    const all = screen.getByRole('button', { name: /All/i });
    expect(all).toBeInTheDocument();
    const next = screen.getByText(/Próximo pokémon/i);
    expect(next).toBeInTheDocument();

    history.push('/');
    const proximo = screen.getByText(/Próximo pokémon/i);
    expect(proximo).toHaveProperty('disabled');
    const a = screen.queryByRole('button', { name: /All/i });
    userEvent.click(a);
    expect(a).toBeVisible();
  });
});
