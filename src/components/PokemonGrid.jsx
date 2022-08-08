import { useFetchData } from '../hooks/useFetchData'

import { PokemonItem } from './PokemonItem'

export const PokemonGrid = () => {
    const { data, isLoading } = useFetchData()
    return (
        <>
            {
                isLoading && (<h2>Loading...</h2>)
            }

            <div className='card-grid'>
                {
                    data.map( pokemon => (
                        <PokemonItem 
                            key={ pokemon.name }
                            { ...pokemon }
                        />
                    ))
                }
            </div>
        </>
    )
}