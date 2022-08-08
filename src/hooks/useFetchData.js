import { useState, useEffect } from 'react'
import { getPokemons } from '../helpers/getPokemons'

export const useFetchData = () => {

    const [data, setData]           = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const getPokemonsData = async () => {
        const { previous, next, pokemons} = await getPokemons()
        setData( pokemons )
        setIsLoading( false )
    }

    useEffect(() => {
        getPokemonsData()
        setIsLoading(true)
    }, [])

    return {
        data,
        isLoading
    }
}