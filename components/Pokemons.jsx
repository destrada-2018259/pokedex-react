import React from 'react'
import './Pokemons.css'

import { useEffect, useState } from 'react'
import { PokemonCard } from './PokemonCard';

export const Pokemons = () => {
    const [pokemons, setPokemons] = useState([ ]);

    useEffect(() => {
  
      const getPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0');
        const pokemonList = await response.json();
        const {results} = pokemonList;
       
        const newPokemons = results.map(async(pokemon) => {
  
          const response = await fetch(pokemon.url);
          const poke = await response.json()
  
          return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default
          }
        })
        setPokemons(await Promise.all(newPokemons))
      }
  
      getPokemon();
    }, [])

  return (
    <section className='pokemon-container'>
        {pokemons.map(pokemon => <PokemonCard {...pokemon} />)}
    </section>
  )
}


