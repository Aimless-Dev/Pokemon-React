import { useState} from "react"

export const PokemonItem = ({ name, images }) => {
    /***
     *  No se llamo la funcion por eso valia riata
    */
    const [ img, setImg ] = useState("")
    const image = async () =>{
        const image = await images
        setImg(image.img)
    }
    image()
    return (
        <>
            <div className="card">
                <img src={ img } />
                <p>{ name }</p>
            </div>
        </>
    )
}