import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../components/renderWithRouter';

describe('1. Teste o componente <App.js />', () => {
  it('Teste se contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByText(/home/i);
    const linkAbout = screen.getByText(/About/i);
    const linkFavorite = screen.getByText(/Favorite Pokémons/i);
    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });

  it('Teste se colocar na URL / ao clicar em home', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByText(/home/i);
    userEvent.click(linkHome);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('Teste se colocar na URL /about ao clicar em about', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByText(/About/i);
    userEvent.click(linkAbout);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('Teste se colocar na URL / ao clicar em Pokemons favoritos', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorite = screen.getByText(/Favorite Pokémons/i);
    userEvent.click(linkFavorite);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  it('Teste se colocar algo diferente na URL vai no NotFound', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/paginaqualquer');

    const notFoundTitle = screen.getByText(/Page requested not found/i);
    expect(notFoundTitle).toBeInTheDocument();
  });
});
