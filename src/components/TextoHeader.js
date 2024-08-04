export default function TextoHeader(){

    const textos = ["Home", "Veículos", "Empresa"]

    return(
        <ul className="flex">
            {textos.map(texto => <li className="text-2xl font-semibold mr-12 hover:scale-110 duration-500 cursor-pointer">{texto}</li>)}
        </ul>
    )
}