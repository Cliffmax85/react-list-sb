import { useState, useEffect } from 'react';
import { fetchBands } from './services/fetch-utils';
import { fetchPokemon } from './services/fetch-utils';
import PokemonList from './Pokemon/PokemonList';
import BandList from './Bands/BandList';
import './App.css';

function App() {
  const [bands, setBands] = useState([]);
  const [pokemon, setPokemon] = useState([]);


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
  }, []);

  return (
    <div className="App">
      <BandList bands={bands} />
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
