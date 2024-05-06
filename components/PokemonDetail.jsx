import React from 'react'
import './PokemonDetail.css'

export const PokemonDetail = ({ show, pokemon, close }) => {

    const getTypeColor = (type) => {
        switch (type) {
            case 'normal':
                return '#a8a878';
            case 'fire':
                return '#f08030';
            case 'water':
                return '#6890f0';
            case 'electric':
                return '#f8d030';
            case 'grass':
                return '#78c850';
            case 'ice':
                return '#98d8d8';
            case 'fighting':
                return '#c03028';
            case 'poison':
                return '#a040a0';
            case 'ground':
                return '#e0c068';
            case 'flying':
                return '#a890f0';
            case 'psychic':
                return '#f85888';
            case 'bug':
                return '#a8b820';
            case 'rock':
                return '#b8a038';
            case 'ghost':
                return '#705898';
            case 'dragon':
                return '#7038f8';
            case 'dark':
                return '#705848';
            case 'steel':
                return '#b8b8d0';
            case 'fairy':
                return '#f0b6bc';

            default:
                return '#4381ff';
        }
    };


    return (
        <div className="modal-container" onClick={close} style={{ display: show ? 'grid' : 'none' }}>
            <section className="modal-body">
                <div className="img-container">
                    <img src={pokemon.img} alt={pokemon.name} className="img-detail" />
                    <section className='types'>
                        {pokemon.types?.map(type => <span className='tag' style={{backgroundColor: getTypeColor(type)}} >{type}</span>)}
                    </section>
                </div>
                <div className="data">
                    <h2 className="title">#{(pokemon.id)} {pokemon.name} </h2>
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
