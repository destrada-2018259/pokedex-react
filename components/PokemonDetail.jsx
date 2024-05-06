import React from 'react'
import './PokemonDetail.css'

export const PokemonDetail = ({ show, pokemon, close }) => {
    return (
        <div className="modal-container" onClick={close} style={{ display: show ? 'grid' : 'none' }}>
            <section className="modal-body">
                <div className="img-container">
                    <img src={pokemon.img} alt={pokemon.name} className="img-detail" />
                    <section>
                        {pokemon.types?.map(type => <span className='tag'>{type}</span>)}
                    </section>
                </div>
                <div className="data">
                    <h2 className="title">{pokemon.name} {(pokemon.id)}</h2>
                    <h3 className="title-section">Abilities</h3>
                    {pokemon.abilities?.map(ability => <span className='tag'>{ability} </span>)}

                    <h3 className="title-section">Stats</h3>
                    <div className='stats'>

                    {pokemon.stats?.map(stat =>
                        <section>
                            <span className='points'>{stat.base}</span>
                            <span>{stat.name}</span>
                        </section>
                    )}
                    </div>
                </div>
            </section>
        </div>
    )
}
