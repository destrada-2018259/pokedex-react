import React from 'react'
import './PokemonCard.css'

export const PokemonCard = ({id, name, img, viewPokemon}) => {
  return (
    <div className='pokemon-card' onClick={viewPokemon}>
        <img src={img} alt={name} className='pokemon-img' />
        <p className='pokemon-title'>
            <span>#{id}</span>
            <span>{name}</span>
        </p>
    </div>
  )
}
