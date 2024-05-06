import { Search } from '../components/Icons';
import { Navbar } from '../components/Navbar';
import { SearchPokemon } from '../components/SearchPokemon';
import viteLogo from '/vite.svg'

import { useEffect, useState } from 'react'

function App() {

  const [pokemons, setPokemons] = useState([ ]);

  useEffect(() => {

    const getPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
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
    <>
      <Navbar/>
      <SearchPokemon/>
      {
        pokemons.map(pokemon =>{
          return (
            <div>
              <img src={pokemon.img} alt={pokemon.name} />
              <p>{pokemon.name}</p>
              <span>{pokemon.id}</span>
            </div>
          )
        })
      }
    </>
  )
}

export default App
