import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class PokemonList extends Component {
  render() {
    const { pokemon } = this.props;
    return (<div>
      {pokemon.map((pokemon, i) => 
        <Pokemon key={`${pokemon}-${i}`}
          {...pokemon} />
      )}
    </div>
    );
  }
}
