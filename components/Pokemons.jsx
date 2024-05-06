import React, { useState } from 'react'
import './Pokemons.css'
import './PokemonCard.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { PokemonCard } from './PokemonCard';
import usePokemons from '../src/hooks/usePokemons';
import { Loading } from './Loading';
import { PokemonDetail } from './PokemonDetail';

export const Pokemons = () => {

  const { pokemons, morePokemon, viewMore } = usePokemons()
  const [show, setShow] = useState({show : false, pokemon: {}})

  const viewPokemon = (pokemon) => setShow({show: true, pokemon})
  const hidePokemon = () => setShow({show: false, pokemon: {}})

  return (
    <>
    <PokemonDetail {... show} close ={hidePokemon} />
      <InfiniteScroll
        dataLength={pokemons.length}
        next={morePokemon}
        hasMore={viewMore}
        loader={<Loading />}
        endMessage={
          <h3 className='title' style={{ gridColumn: '1/6' }}>Sorry, there aren't more Pokemon to show</h3>
        }
        className='pokemon-container'
      >
        {pokemons.map(pokemon => <PokemonCard {...pokemon} key={pokemon.id} viewPokemon={() => viewPokemon(pokemon)} />)}
      </InfiniteScroll>
    </>
  )
}


