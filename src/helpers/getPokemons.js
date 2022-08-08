import { getImagePokemon } from "./getImagePokemon"

export const getPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
    
    const resp = await fetch( url )

    const { next, previous, results } = await resp.json()

    const getImages = async (pokemonName) => {
        const { other } = await getImagePokemon(pokemonName)
        return {
            img: other['official-artwork']['front_default']
        }
    }

    const pokemons = results.map( (pokemon) => ({
        name: pokemon.name,
        images: getImages(pokemon.name)
    }))
    
    return {
        next,
        previous,
        pokemons
    }
}