import React from 'react'
import './PokemonCard.css'

export const PokemonCard = ({id, name, img}) => {
  return (
    <div className='pokemon-card'>
        <img src={img} alt={name} className='pokemon-img' />
        <p className='pokemon-title'>
            <span>#{id}</span>
            <span>{name}</span>
        </p>
    </div>
  )
}
