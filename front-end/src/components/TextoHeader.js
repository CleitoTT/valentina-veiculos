import { Link } from "react-router-dom"

export default function TextoHeader(){

    const textos = ["Veículos", "Empresa"]

    return(
        <ul className="flex">
            <Link to={'/'}><li className="text-2xl font-semibold hover:scale-110 duration-500 cursor-pointer" key={3}>Home</li></Link>
            {textos.map((texto, index) => <Link to={'/'+texto.toLowerCase()}><li className="text-2xl font-semibold ml-12 hover:scale-110 duration-500 cursor-pointer" key={index}>{texto}</li></Link>)}
        </ul>
    )
}