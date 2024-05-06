import React from 'react'
import "./SearchPokemon.css"
import { Search } from './Icons'

export const SearchPokemon = () => {
  return (
    <>
      <h3 className='title'>More than 800 Pokemon, look for your favorite!</h3>
      <section className='container-search'>
        <input type="text" placeholder='Find your Pokemon' className='input-search' />
        <button className='btn-search'>
          <Search />
          Search Pokemon
        </button>
      </section>
    </>
  )
}
