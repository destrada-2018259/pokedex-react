import React from 'react'
import "./SearchPokemon.css"
import { Search } from './Icons'

export const SearchPokemon = ({search, setSearch, searchPokemon}) => {
  return (
    <>
      <h3 className='title'>More than 800 Pokemon, look for your favorite!</h3>
      <form className='container-search' onSubmit={searchPokemon} >
        <input type="text" placeholder='Find your Pokemon by name or #' className='input-search' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='btn-search' type='submit' >
          <Search />
          Search Pokemon
        </button>
      </form>
    </>
  )
}
