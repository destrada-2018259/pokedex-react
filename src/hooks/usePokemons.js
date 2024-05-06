import { useEffect, useState } from 'react'
const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

export default function usePokemons(){
    const [pokemons, setPokemons] = useState([ ]);
    const [nextUrl, setNextUrl] = useState('')
    const [viewMore, setViewMore] = useState(true)
   
    const getPokemon = async (url = URL_DEFAULT) => {

        const response = await fetch(url);
        const pokemonList = await response.json();
        const {next, results} = pokemonList;
       
        const newPokemons = await Promise.all(
            results.map( async(pokemon) =>{
                const response = await fetch(pokemon.url)
                const poke = await response.json()
                const abilities = poke.abilities.map(a => a.ability.name)
                const stats = poke.stats.map(s => {return {name: s.stat.name, base: s.base_stat}})
                const types = poke.types.map(t => t.type.name)

                return{
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other.dream_world.front_default || poke.sprites.front_default,
                    abilities,
                    stats,
                    types
                }
            })
        )
        return { next, newPokemons}
    }

    const obtainPokemons = async () =>{
        const {next, newPokemons} = await getPokemon()
        setPokemons(newPokemons)
        setNextUrl(next)
    }

    const morePokemon = async() =>{
        const {next, newPokemons} = await getPokemon(nextUrl)
        setPokemons(prev => [...prev, ...newPokemons])
        next === null && setViewMore(false)
        setNextUrl(next)
    }

    useEffect(() => {obtainPokemons()}, [])

    return {pokemons, morePokemon, viewMore}
}