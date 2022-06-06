import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../components/renderWithRouter';

describe('3. Teste o componente <FavoritePokemons.js />', () => {
  test('Teste se tem aparece a mensagem No favorite pokemon found', () => {
    renderWithRouter(<App />);
    const linkFavorite = screen.getByText(/Favorite Pokémons/i);
    userEvent.click(linkFavorite);
    const notFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(notFavorite).toBeInTheDocument();
  });
  test('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);
    const pokemon = screen.getByText(/Fire/i);
    userEvent.click(pokemon);
    const details = screen.getByText(/More details/i);
    userEvent.click(details);
    const favoritando = screen.getByText(/Pokémon favoritado?/i);
    userEvent.click(favoritando);
    const linkFavorite = screen.getByText(/Favorite Pokémons/i);
    userEvent.click(linkFavorite);
    const namePokemon = screen.getByText(/Charmander/i);
    expect(namePokemon).toBeInTheDocument();
  });
});
