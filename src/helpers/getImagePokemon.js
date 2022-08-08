export const getImagePokemon = async ( pokemonName ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    const resp = await fetch( url )

    const { sprites, id } = await resp.json()
    return sprites
}