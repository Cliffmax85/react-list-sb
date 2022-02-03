import { useState, useEffect } from 'react';
import { fetchBands } from './services/fetch-utils';
import { fetchPokemon } from './services/fetch-utils';
import { fetchMovies } from './services/fetch-utils';
import { fetchCars } from './services/fetch-utils';
import MovieList from './Movies/MovieList';
import PokemonList from './Pokemon/PokemonList';
import BandList from './Bands/BandList';
import './App.css';
import CarList from './Cars/CarList';

function App() {
  const [bands, setBands] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [movies, setMovies] = useState([]);
  const [cars, setCars] = useState([]);

  async function fetchCarsData() {
    const data = await fetchCars();

    setCars(data);
  }

  async function fetchMoviesData() {
    const data = await fetchMovies();

    setMovies(data);
  }


  async function fetchBandsData() {
    const data = await fetchBands();

    setBands(data);
  }

  async function fetchPokemonData() {
    const data = await fetchPokemon();

    setPokemon(data);
  }

  useEffect(() => {
    fetchBandsData();
    fetchPokemonData();
    fetchMoviesData();
    fetchCarsData();
  }, []);
  return (
    <div className="App">
      <BandList bands={bands} />
      <PokemonList pokemon={pokemon} />
      <MovieList movies={movies} />
      <CarList cars={cars} />
    </div>
    
  );
  
}

export default App;
